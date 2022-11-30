import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { Company } from './modules/company/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CustomersModule } from './modules/customers/customers.module';
import { Customer } from './modules/customers/entities/customer.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '51.68.167.212',
      port: 5432,
      username: 'admin',
      password: 'root',
      database: 'rate',
      // entities: [Company,Customer],
      // synchronize: true,
      autoLoadEntities: true,
      keepConnectionAlive:false,
    }),
    CompanyModule,
    CustomersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(/* private dataSource: DataSource */) {}
}
