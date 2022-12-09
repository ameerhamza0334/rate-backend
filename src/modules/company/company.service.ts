import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getRepository, Repository } from 'typeorm';
import { Company, remodelSOA } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

import { Accounts, AccountsDetails } from './entities/account.entity';
import { Flags, Tags, Users } from '../users/entities/users.entity';

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
      const company_query = await getRepository(Company).createQueryBuilder()
        .select()
        .where("Company.id = :id", { id: Number(query.company_id) })
        .innerJoinAndSelect(Accounts, 'a', "Company.id = a.company_id")
        .innerJoinAndSelect(AccountsDetails, 'ad', "a.id = ad.account_id")
        .innerJoinAndSelect(Customers, 'c', "Company.id = c.company_id")
        .leftJoinAndSelect(Flags, 'fa', "a.id = fa.refrence_id")
        .leftJoinAndSelect(Tags, 'ta', "a.id = ta.refrence_id")
        .leftJoinAndSelect(Users, 'u', "ta.tagged = u.id")
        .leftJoinAndSelect(Users, 'u2', " fa.flagged = u2.id")
        .printSql().getRawAndEntities()
      return company_query
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }

  }


}
