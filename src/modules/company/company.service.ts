import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { data, kpi_perf, revenues, suppliers } from "../../../data/getKPI";

import AppDataSource from "../../db/db"
import { Flags, Tags } from '../users/entities/users.entity';
import { Customers } from '../customers/entities/customer.entity';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>
  ) {

  }
  getHello(): string {
    return 'Hello World!';
  }
  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number) {

    // return this.companyRepository.findOne({ id });


  }
  async save(body: CreateCompanyDto): Promise<CreateCompanyDto & Company> {
    return await this.companyRepository.save(body);
  }
  async remove(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }

  async getAllSOA(query) {
    try {
      let company_data = await AppDataSource.manager.findAndCount(Company, {
        where: {
          id: query.company_id
        },
        relations: {
          accounts: {
            accountsDetails: true
          },
          customers: true
        }
      })

      console.log(company_data)
      if (company_data[0].length > 0) {
        let company = company_data[0]
        let account_ids = company[0].accounts.map(x => x.id)
        let flags_data = await AppDataSource.manager.find(Flags, {
          where: {
            refrenceId: In(account_ids)
          },
          relations: {
            flagged: true
          }
        })

        let tags_data = await AppDataSource.manager.find(Tags, {
          where: {
            refrenceId: In(account_ids)
          },
          relations: {
            tagged: true
          }
        })

        company[0].accounts = company[0].accounts.map(acc => {
          acc['flags'] = flags_data.filter(flag => flag.refrenceId === acc.id)
          acc['tags'] = tags_data.filter(tag => tag.refrenceId === acc.id)
          return acc
        })
        company_data[0] = company
      }

      return { data: company_data[0], meta: { count: company_data[1] } }

    } catch (error) {
      throw new HttpException(error.message, error.status);
    }

  }

  async getPortfolioKPIs() {
    return data
  }

  async getPerformanceKPIs() {
    return kpi_perf
  }

  async getRevenues() {
    return revenues
  }

  async getSuppliers() {
    return suppliers
  }

  async getAllInvoices(query) {
    try {
      let customer_data = await AppDataSource.manager.findAndCount(Customers, {
        where: {
          company: {
            id: query.company_id
          }
        },
        relations: {
          invoices: {
            invoiceDetails: true
          }
        }

      })
      if (customer_data[0].length > 0) {
        let customer = customer_data[0]
        let customer_ids = customer[0].invoices.map(x => x.id)
        let flags_data = await AppDataSource.manager.find(Flags, {
          where: {
            refrenceId: In(customer_ids)
          },
          relations: {
            flagged: true
          }
        })

        let tags_data = await AppDataSource.manager.find(Tags, {
          where: {
            refrenceId: In(customer_ids)
          },
          relations: {
            tagged: true
          }
        })

        customer[0].invoices = customer[0].invoices.map(acc => {
          acc['flags'] = flags_data.filter(flag => flag.refrenceId === acc.id)
          acc['tags'] = tags_data.filter(tag => tag.refrenceId === acc.id)
          return acc
        })
        customer_data[0] = customer

      }

      return { data: customer_data[0], meta: { count: customer_data[1] } }
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

}
