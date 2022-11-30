import { Ip, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { Company } from './modules/company/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CustomersModule } from './modules/customers/customers.module';
import { Customer } from './modules/customers/entities/customer.entity';
import { ConfigModule } from '@nestjs/config';
import configuration from './modules/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,

      port: parseInt(process.env.DB_PORT),

      username: String(process.env.DB_USER),

      password: String(process.env.DB_PASSWORD),

      database: String(process.env.DB_NAME),

      // entities: [Company,Customer],
      // synchronize: true,
      autoLoadEntities: true,
      keepConnectionAlive: false,
    }),
    CompanyModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
