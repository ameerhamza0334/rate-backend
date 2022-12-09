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
exports.Tags = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
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
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.tags),
    (0, typeorm_1.JoinColumn)([{ name: "tagged", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], Tags.prototype, "tagged", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.tags2),
    (0, typeorm_1.JoinColumn)([{ name: "tagged_by", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], Tags.prototype, "taggedBy", void 0);
Tags = __decorate([
    (0, typeorm_1.Entity)("tags", { schema: "public" })
], Tags);
exports.Tags = Tags;
//# sourceMappingURL=Tags.js.map