import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';

import { Customers } from './entities/customer.entity';


import {} from "data/getRevenue.json"
@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private customerRepository: Repository<Customers>,
  ) { }
  async create(
    createCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto & Customers> {
    return await this.customerRepository.save(createCustomerDto);
  }

  async findAll(): Promise<Customers[]> {
    return await this.customerRepository.find();
  }

  async findOne(id: number) {
    // return await this.customerRepository.findOne({ id });
    // return `This action returns a #${id} customer`;
  }

  async update(id: number, updateCustomerDto): Promise<any> {
    return await this.customerRepository.update(id, updateCustomerDto);
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }


}
