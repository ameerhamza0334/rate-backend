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
exports.ApprovalQueue = exports.InvoiceDetails = exports.Invoices = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const users_entity_1 = require("../../users/entities/users.entity");
let Invoices = class Invoices {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Invoices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "invoice_no", nullable: true }),
    __metadata("design:type", String)
], Invoices.prototype, "invoiceNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "invoice_date", nullable: true }),
    __metadata("design:type", String)
], Invoices.prototype, "invoiceDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "order_no", nullable: true }),
    __metadata("design:type", String)
], Invoices.prototype, "orderNo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "order_date", nullable: true }),
    __metadata("design:type", String)
], Invoices.prototype, "orderDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Invoices.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Invoices.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "total_amount", nullable: true }),
    __metadata("design:type", String)
], Invoices.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ApprovalQueue, (approvalQueue) => approvalQueue.invoice),
    __metadata("design:type", Array)
], Invoices.prototype, "approvalQueues", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => InvoiceDetails, (invoiceDetails) => invoiceDetails.invoice),
    __metadata("design:type", Array)
], Invoices.prototype, "invoiceDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customers, (customers) => customers.invoices),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", customer_entity_1.Customers)
], Invoices.prototype, "customer", void 0);
Invoices = __decorate([
    (0, typeorm_1.Index)("new_invoices_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("invoices", { schema: "public" })
], Invoices);
exports.Invoices = Invoices;
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
    (0, typeorm_1.ManyToOne)(() => Invoices, (invoices) => invoices.invoiceDetails),
    (0, typeorm_1.JoinColumn)([{ name: "invoice_id", referencedColumnName: "id" }]),
    __metadata("design:type", Invoices)
], InvoiceDetails.prototype, "invoice", void 0);
InvoiceDetails = __decorate([
    (0, typeorm_1.Index)("new_invoice_details_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("invoice_details", { schema: "public" })
], InvoiceDetails);
exports.InvoiceDetails = InvoiceDetails;
let ApprovalQueue = class ApprovalQueue {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], ApprovalQueue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", {
        name: "approved",
        nullable: true,
        default: () => "false",
    }),
    __metadata("design:type", Boolean)
], ApprovalQueue.prototype, "approved", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], ApprovalQueue.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], ApprovalQueue.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (users) => users.approvalQueues),
    (0, typeorm_1.JoinColumn)([{ name: "assigned_to", referencedColumnName: "id" }]),
    __metadata("design:type", users_entity_1.Users)
], ApprovalQueue.prototype, "assignedTo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Invoices, (invoices) => invoices.approvalQueues),
    (0, typeorm_1.JoinColumn)([{ name: "invoice_id", referencedColumnName: "id" }]),
    __metadata("design:type", Invoices)
], ApprovalQueue.prototype, "invoice", void 0);
ApprovalQueue = __decorate([
    (0, typeorm_1.Entity)("approval_queue", { schema: "public" })
], ApprovalQueue);
exports.ApprovalQueue = ApprovalQueue;
//# sourceMappingURL=invoices.entity.js.map