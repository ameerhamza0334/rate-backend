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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const ApprovalQueue_1 = require("./ApprovalQueue");
const Flags_1 = require("./Flags");
const Tags_1 = require("./Tags");
const Roles_1 = require("./Roles");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id"
    }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name" }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "phone_number", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "avatar", nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ApprovalQueue_1.ApprovalQueue, (approvalQueue) => approvalQueue.assignedTo),
    __metadata("design:type", Array)
], Users.prototype, "approvalQueues", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Flags_1.Flags, (flags) => flags.flagged),
    __metadata("design:type", Array)
], Users.prototype, "flags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Flags_1.Flags, (flags) => flags.flaggedBy),
    __metadata("design:type", Array)
], Users.prototype, "flags2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Tags_1.Tags, (tags) => tags.tagged),
    __metadata("design:type", Array)
], Users.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Tags_1.Tags, (tags) => tags.taggedBy),
    __metadata("design:type", Array)
], Users.prototype, "tags2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_1.Roles, (roles) => roles.users),
    (0, typeorm_1.JoinColumn)([{ name: "role_id", referencedColumnName: "id" }]),
    __metadata("design:type", Roles_1.Roles)
], Users.prototype, "role", void 0);
Users = __decorate([
    (0, typeorm_1.Index)("users_id_key", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("users", { schema: "public" })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map