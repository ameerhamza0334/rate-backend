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
exports.ApprovalQueue = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
const Invoices_1 = require("./Invoices");
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
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.approvalQueues),
    (0, typeorm_1.JoinColumn)([{ name: "assigned_to", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], ApprovalQueue.prototype, "assignedTo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Invoices_1.Invoices, (invoices) => invoices.approvalQueues),
    (0, typeorm_1.JoinColumn)([{ name: "invoice_id", referencedColumnName: "id" }]),
    __metadata("design:type", Invoices_1.Invoices)
], ApprovalQueue.prototype, "invoice", void 0);
ApprovalQueue = __decorate([
    (0, typeorm_1.Entity)("approval_queue", { schema: "public" })
], ApprovalQueue);
exports.ApprovalQueue = ApprovalQueue;
//# sourceMappingURL=ApprovalQueue.js.map