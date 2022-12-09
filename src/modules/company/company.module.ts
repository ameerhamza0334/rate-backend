import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { Accounts, AccountsDetails } from "./entities/account.entity"

import { CustomersModule } from '../customers/customers.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Company, Accounts, AccountsDetails]), CustomersModule, UsersModule],
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule { }
