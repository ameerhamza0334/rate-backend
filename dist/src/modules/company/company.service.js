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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const company_entity_1 = require("./entities/company.entity");
const account_entity_1 = require("./entities/account.entity");
const users_entity_1 = require("../users/entities/users.entity");
const customer_entity_1 = require("../customers/entities/customer.entity");
let CompanyService = class CompanyService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    getHello() {
        return 'Hello World!';
    }
    findAll() {
        return this.companyRepository.find();
    }
    findOne(id) {
    }
    async save(body) {
        return await this.companyRepository.save(body);
    }
    async remove(id) {
        await this.companyRepository.delete(id);
    }
    async getAllSOA(query) {
        try {
            const company_query = await (0, typeorm_2.getRepository)(company_entity_1.Company).createQueryBuilder()
                .select()
                .where("Company.id = :id", { id: Number(query.company_id) })
                .innerJoinAndSelect(account_entity_1.Accounts, 'a', "Company.id = a.company_id")
                .innerJoinAndSelect(account_entity_1.AccountsDetails, 'ad', "a.id = ad.account_id")
                .innerJoinAndSelect(customer_entity_1.Customers, 'c', "Company.id = c.company_id")
                .leftJoinAndSelect(users_entity_1.Flags, 'fa', "a.id = fa.refrence_id")
                .leftJoinAndSelect(users_entity_1.Tags, 'ta', "a.id = ta.refrence_id")
                .leftJoinAndSelect(users_entity_1.Users, 'u', "ta.tagged = u.id")
                .leftJoinAndSelect(users_entity_1.Users, 'u2', " fa.flagged = u2.id")
                .printSql().getRawAndEntities();
            return company_query;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map