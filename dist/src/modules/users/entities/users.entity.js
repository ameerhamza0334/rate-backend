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
exports.Tags = exports.Flags = exports.Users = void 0;
const typeorm_1 = require("typeorm");
const roles_entity_1 = require("./roles.entity");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "integer",
        name: "id",
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
    (0, typeorm_1.OneToMany)(() => Flags, (flags) => flags.flagged),
    __metadata("design:type", Array)
], Users.prototype, "flags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Flags, (flags) => flags.flaggedBy),
    __metadata("design:type", Array)
], Users.prototype, "flags2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Tags, (tags) => tags.tagged),
    __metadata("design:type", Array)
], Users.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Tags, (tags) => tags.taggedBy),
    __metadata("design:type", Array)
], Users.prototype, "tags2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => roles_entity_1.Roles, (roles) => roles.users),
    (0, typeorm_1.JoinColumn)([{ name: "role_id", referencedColumnName: "id" }]),
    __metadata("design:type", roles_entity_1.Roles)
], Users.prototype, "role", void 0);
Users = __decorate([
    (0, typeorm_1.Index)("users_id_key", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("users", { schema: "public" })
], Users);
exports.Users = Users;
let Flags = class Flags {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Flags.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "comment", nullable: true }),
    __metadata("design:type", String)
], Flags.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Flags.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Flags.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "refrence_id", nullable: true }),
    __metadata("design:type", Number)
], Flags.prototype, "refrenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "type", enum: ["invoice", "accounts"] }),
    __metadata("design:type", String)
], Flags.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users, (users) => users.flags),
    (0, typeorm_1.JoinColumn)([{ name: "flagged", referencedColumnName: "id" }]),
    __metadata("design:type", Users)
], Flags.prototype, "flagged", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users, (users) => users.flags2),
    (0, typeorm_1.JoinColumn)([{ name: "flagged_by", referencedColumnName: "id" }]),
    __metadata("design:type", Users)
], Flags.prototype, "flaggedBy", void 0);
Flags = __decorate([
    (0, typeorm_1.Entity)("flags", { schema: "public" })
], Flags);
exports.Flags = Flags;
let Tags = class Tags {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Tags.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "comment", nullable: true }),
    __metadata("design:type", String)
], Tags.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Tags.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Tags.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "refrence_id", nullable: true }),
    __metadata("design:type", Number)
], Tags.prototype, "refrenceId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "type", enum: ["invoice", "accounts"] }),
    __metadata("design:type", String)
], Tags.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users, (users) => users.tags),
    (0, typeorm_1.JoinColumn)([{ name: "tagged", referencedColumnName: "id" }]),
    __metadata("design:type", Users)
], Tags.prototype, "tagged", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users, (users) => users.tags2),
    (0, typeorm_1.JoinColumn)([{ name: "tagged_by", referencedColumnName: "id" }]),
    __metadata("design:type", Users)
], Tags.prototype, "taggedBy", void 0);
Tags = __decorate([
    (0, typeorm_1.Entity)("tags", { schema: "public" })
], Tags);
exports.Tags = Tags;
//# sourceMappingURL=users.entity.js.map