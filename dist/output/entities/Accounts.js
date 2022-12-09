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
exports.Accounts = void 0;
const typeorm_1 = require("typeorm");
const Company_1 = require("./Company");
const AccountsDetails_1 = require("./AccountsDetails");
let Accounts = class Accounts {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Accounts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Accounts.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Accounts.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "currency", default: () => "'SAR'" }),
    __metadata("design:type", String)
], Accounts.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company_1.Company, (company) => company.accounts),
    (0, typeorm_1.JoinColumn)([{ name: "company_id", referencedColumnName: "id" }]),
    __metadata("design:type", Company_1.Company)
], Accounts.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AccountsDetails_1.AccountsDetails, (accountsDetails) => accountsDetails.account),
    __metadata("design:type", Array)
], Accounts.prototype, "accountsDetails", void 0);
Accounts = __decorate([
    (0, typeorm_1.Index)("accounts_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("accounts", { schema: "public" })
], Accounts);
exports.Accounts = Accounts;
//# sourceMappingURL=Accounts.js.map