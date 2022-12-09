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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const Accounts_1 = require("./Accounts");
const Customers_1 = require("./Customers");
let Company = class Company {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address", nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "vat_no", nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "vatNo", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cr_no", nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "crNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "country", nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Accounts_1.Accounts, (accounts) => accounts.company),
    __metadata("design:type", Array)
], Company.prototype, "accounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Customers_1.Customers, (customers) => customers.company),
    __metadata("design:type", Array)
], Company.prototype, "customers", void 0);
Company = __decorate([
    (0, typeorm_1.Index)("company_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("company", { schema: "public" })
], Company);
exports.Company = Company;
//# sourceMappingURL=Company.js.map