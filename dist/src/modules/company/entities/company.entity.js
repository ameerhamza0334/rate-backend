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
exports.remodelSOA = exports.Company = void 0;
const customer_entity_1 = require("../../customers/entities/customer.entity");
const typeorm_1 = require("typeorm");
let Company = class Company {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Company.prototype, "vat_no", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_entity_1.Customer, (customer) => customer.company),
    __metadata("design:type", Array)
], Company.prototype, "customer", void 0);
Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
exports.Company = Company;
function remodelSOA(data) {
    let resp = [];
    let rows_data = data;
    if (rows_data.length > 0) {
        console.log(rows_data);
        let first_row_data = rows_data[0];
        let company_data = {
            id: first_row_data.company_id,
            name: first_row_data.company_name,
            address: first_row_data.company_address,
            country: first_row_data.company_country,
            VATNo: first_row_data.company_vat_no
        };
        let customer_ids = rows_data.map(row => {
            return row.customer_id;
        });
        customer_ids = Array.from(new Set(customer_ids));
        console.log(customer_ids);
        let customers = customer_ids.map((customer_id) => {
            let customer_soa = rows_data.filter(rows => rows.customer_id === customer_id);
            console.log(customer_soa);
            let opening_dates = customer_soa.filter(x => x.description === 'Opening Balance');
            let closing_dates = customer_soa.filter(x => x.description === 'Closing Balance');
            return {};
        });
        console.log(customers);
        let customer_data = {
            name: first_row_data.custsomer_name,
            profilePic: first_row_data.customer_avatar,
            address: first_row_data.customer_address,
            country: first_row_data.customer_country,
            VATNo: first_row_data.customer_vat_no,
            CRNo: first_row_data.customer_cr_no,
            fileType: first_row_data.customer_file_type
        };
        let opening_of_soa = rows_data.filter(row => {
            if (row.description === 'Opening Balance')
                return row;
        });
        console.log(opening_of_soa);
        let closing_of_soa = rows_data.filter(row => {
            if (row.description === 'Closing Balance')
                return row;
        });
        console.log(closing_of_soa);
        let soa = [];
        resp.push({ company: company_data, customer: customer_data, soa: soa });
    }
}
exports.remodelSOA = remodelSOA;
//# sourceMappingURL=company.entity.js.map