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
exports.AccountsDetails = void 0;
const typeorm_1 = require("typeorm");
const Accounts_1 = require("./Accounts");
let AccountsDetails = class AccountsDetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], AccountsDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "amount", nullable: true }),
    __metadata("design:type", Number)
], AccountsDetails.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "voucher_no", nullable: true }),
    __metadata("design:type", String)
], AccountsDetails.prototype, "voucherNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "description", nullable: true }),
    __metadata("design:type", String)
], AccountsDetails.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "transaction_type",
        nullable: true,
        enum: ["credit", "debit"],
    }),
    __metadata("design:type", String)
], AccountsDetails.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], AccountsDetails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], AccountsDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "vouhcer_type", nullable: true }),
    __metadata("design:type", String)
], AccountsDetails.prototype, "vouhcerType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Accounts_1.Accounts, (accounts) => accounts.accountsDetails),
    (0, typeorm_1.JoinColumn)([{ name: "account_id", referencedColumnName: "id" }]),
    __metadata("design:type", Accounts_1.Accounts)
], AccountsDetails.prototype, "account", void 0);
AccountsDetails = __decorate([
    (0, typeorm_1.Index)("accounts_details_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("accounts_details", { schema: "public" })
], AccountsDetails);
exports.AccountsDetails = AccountsDetails;
//# sourceMappingURL=AccountsDetails.js.map