import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './modules/company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './modules/customers/customers.module';


import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // TypeOrmModule.forRootAsync({
      // inject: [ConfigService],
      // useFactory: (config: ConfigService) => ({
      
      type: 'postgres',
      // host: db_host,
      host: '51.68.167.212',
      // port: db_port,
      port: 5432,
      // username: db_user,
      username: 'admin',
      // password: db_password,
      password: 'root',
      // database: db_name,
      database: 'rate',
      // entities: [Company,Customer],
      // synchronize: true,
      autoLoadEntities: true,
      keepConnectionAlive: false,
      // }),
    }),
    CompanyModule,
    CustomersModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor,
  },],
})
export class AppModule {
  constructor() { }
}
