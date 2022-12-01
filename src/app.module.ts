import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './modules/customers/customers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './modules/config/configuration';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { KpiModule } from './modules/kpi/kpi.module';
import { RevenueModule } from './modules/revenue/revenue.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
     
        port: config.get('DB_PORT'),

        username: config.get('DB_USERNAME'),

        password: config.get('DB_PASSWORD'),

        database: config.get('DB_NAME'),

        // entities: [Company,Customer],
        // synchronize: true,
        autoLoadEntities: true,
        keepConnectionAlive: false,
      }),
    }),
    CompanyModule,
    CustomersModule,
    SuppliersModule,
    KpiModule, 
    RevenueModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
