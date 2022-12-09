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
exports.Flags = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
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
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.flags),
    (0, typeorm_1.JoinColumn)([{ name: "flagged", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], Flags.prototype, "flagged", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.flags2),
    (0, typeorm_1.JoinColumn)([{ name: "flagged_by", referencedColumnName: "id" }]),
    __metadata("design:type", Users_1.Users)
], Flags.prototype, "flaggedBy", void 0);
Flags = __decorate([
    (0, typeorm_1.Entity)("flags", { schema: "public" })
], Flags);
exports.Flags = Flags;
//# sourceMappingURL=Flags.js.map