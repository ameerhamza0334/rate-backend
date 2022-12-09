"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const company_module_1 = require("./modules/company/company.module");
const typeorm_1 = require("@nestjs/typeorm");
const customers_module_1 = require("./modules/customers/customers.module");
const core_1 = require("@nestjs/core");
const transform_interceptor_1 = require("./interceptors/transform.interceptor");
let AppModule = class AppModule {
    constructor() { }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '51.68.167.212',
                port: 5432,
                username: 'admin',
                password: 'root',
                database: 'rate',
                autoLoadEntities: true,
                keepConnectionAlive: false,
            }),
            company_module_1.CompanyModule,
            customers_module_1.CustomersModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_interceptor_1.TransformInterceptor,
            },],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map