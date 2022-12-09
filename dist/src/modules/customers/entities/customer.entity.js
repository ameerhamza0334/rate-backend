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
exports.Customers = void 0;
const company_entity_1 = require("../../company/entities/company.entity");
const typeorm_1 = require("typeorm");
let Customers = class Customers {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Customers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "vat_no", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "vatNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cr_no", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "crNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "place_of_supply", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "placeOfSupply", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "file_type", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "fileType", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Customers.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Customers.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "country", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "avatar", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (company) => company.customers),
    (0, typeorm_1.JoinColumn)([{ name: "company_id", referencedColumnName: "id" }]),
    __metadata("design:type", company_entity_1.Company)
], Customers.prototype, "company", void 0);
Customers = __decorate([
    (0, typeorm_1.Index)("customers_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("customers", { schema: "public" })
], Customers);
exports.Customers = Customers;
//# sourceMappingURL=customer.entity.js.map