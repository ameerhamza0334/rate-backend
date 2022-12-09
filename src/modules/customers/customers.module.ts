import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customers, } from './entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Customers])],

  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersModule]
})
export class CustomersModule { }
