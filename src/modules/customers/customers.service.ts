import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

import { Customer } from './entities/customer.entity';
import { data, kpi_perf } from "../../../data/getKPI";
@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) { }
  async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto & Customer> {
    return await this.customerRepository.save(createCustomerDto);
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    return await this.customerRepository.findOne({ id });
    // return `This action returns a #${id} customer`;
  }

  async update(id: number, updateCustomerDto): Promise<any> {
    return await this.customerRepository.update(id, updateCustomerDto);
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }

  async getPortfolioKPIs() {
    return data
  }

  async getPerformanceKPIs() {
    return kpi_perf
  }

}
