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
        return this.companyRepository.findOne({ id });
    }
    async save(body) {
        return await this.companyRepository.save(body);
    }
    async remove(id) {
        await this.companyRepository.delete(id);
    }
    async getAllSOA(query) {
        try {
            let entityManager = (0, typeorm_2.getConnection)().manager;
            let soa_sql = `SELECT 
    company.id      AS company_id,
    company.name    AS company_name,
    company.address AS company_address,
    company.vat_no  AS company_vat_no,
    company.country AS company_country,

    c.id            AS customer_id,
    c.name          AS custsomer_name,
    c.vat_no        AS customer_vat_no,
    c.country       AS customer_country,
    c.vat_no        AS customer_vat_no,
    c.cr_no         AS customer_cr_no,
    c.address       AS customer_address,
    c.file_type     AS customer_file_type,
    c.avatar        AS customer_avatar,

    a.id            AS account_id,
    a.currency,

    ad.id           AS account_detail_id,
    ad.amount,
    ad.description,
    ad.transaction_type,
    ad.voucher_no,
    ad.vouhcer_type,
    ad.created_at   AS started_date,

    ta.tagged,
    u.name          AS tagged_user_name,
    u.avatar        AS tagged_user_avatar,
    ta.comment,
    ta.created_at   AS comment_created_at,

    fa.flagged,
    u2.name         AS flagged_user_name,
    u2.avatar       AS flagged_user_avatar


FROM company company
      INNER JOIN accounts a ON company.id = a.company_id
      INNER JOIN accounts_details ad ON a.id = ad.account_id
      INNER JOIN customers c ON company.id = c.company_id
      LEFT OUTER JOIN flags fa ON a.id = fa.refrence_id
      LEFT OUTER JOIN tags ta ON a.id = ta.refrence_id
      LEFT OUTER JOIN users u ON ta.tagged = u.id
      LEFT OUTER JOIN users u2 ON fa.flagged = u.id
WHERE company.id = ${Number(query.company_id)}
AND (ta.type IS NULL OR ta.type = 'accounts')
AND (fa.type IS NULL OR fa.type = 'accounts');`;
            console.log(soa_sql);
            let soa_data = await entityManager.query(soa_sql);
            return (0, company_entity_1.remodelSOA)(soa_data);
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