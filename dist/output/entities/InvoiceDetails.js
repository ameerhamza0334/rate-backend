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
exports.InvoiceDetails = void 0;
const typeorm_1 = require("typeorm");
const Invoices_1 = require("./Invoices");
let InvoiceDetails = class InvoiceDetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "ser_no", nullable: true }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "serNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "description", nullable: true }),
    __metadata("design:type", String)
], InvoiceDetails.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "qty", nullable: true }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "qty", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "rate", nullable: true }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "amount", nullable: true }),
    __metadata("design:type", Number)
], InvoiceDetails.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], InvoiceDetails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], InvoiceDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Invoices_1.Invoices, (invoices) => invoices.invoiceDetails),
    (0, typeorm_1.JoinColumn)([{ name: "invoice_id", referencedColumnName: "id" }]),
    __metadata("design:type", Invoices_1.Invoices)
], InvoiceDetails.prototype, "invoice", void 0);
InvoiceDetails = __decorate([
    (0, typeorm_1.Index)("new_invoice_details_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("invoice_details", { schema: "public" })
], InvoiceDetails);
exports.InvoiceDetails = InvoiceDetails;
//# sourceMappingURL=InvoiceDetails.js.map