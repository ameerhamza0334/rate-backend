import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

import { Customers } from './entities/customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<CreateCustomerDto & Customers> {
    return await this.customersService.create(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customers[]> {
    return await this.customersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // return await this.customersService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto,
  ): Promise<any> {
    return await this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.customersService.remove(+id);
  }

 
}
