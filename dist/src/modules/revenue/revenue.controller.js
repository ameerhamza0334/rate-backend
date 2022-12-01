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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueController = void 0;
const common_1 = require("@nestjs/common");
const revenue_service_1 = require("./revenue.service");
const create_revenue_dto_1 = require("./dto/create-revenue.dto");
const update_revenue_dto_1 = require("./dto/update-revenue.dto");
let RevenueController = class RevenueController {
    constructor(revenueService) {
        this.revenueService = revenueService;
    }
    create(createRevenueDto) {
        return this.revenueService.create(createRevenueDto);
    }
    findAll() {
        return this.revenueService.findAll();
    }
    findOne(id) {
        return this.revenueService.findOne(+id);
    }
    update(id, updateRevenueDto) {
        return this.revenueService.update(+id, updateRevenueDto);
    }
    remove(id) {
        return this.revenueService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_revenue_dto_1.CreateRevenueDto]),
    __metadata("design:returntype", void 0)
], RevenueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RevenueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RevenueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_revenue_dto_1.UpdateRevenueDto]),
    __metadata("design:returntype", void 0)
], RevenueController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RevenueController.prototype, "remove", null);
RevenueController = __decorate([
    (0, common_1.Controller)('revenue'),
    __metadata("design:paramtypes", [revenue_service_1.RevenueService])
], RevenueController);
exports.RevenueController = RevenueController;
//# sourceMappingURL=revenue.controller.js.map