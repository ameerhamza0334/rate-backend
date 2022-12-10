import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customers, } from './entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from '../company/company.module';
import { AppModule } from 'src/app.module';
import { Invoices } from '../company/entities/invoices.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Customers, Invoices]),
    
  ],

  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersModule]
})
export class CustomersModule { }
