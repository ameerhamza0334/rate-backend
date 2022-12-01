"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueService = void 0;
const common_1 = require("@nestjs/common");
const getRevenue_json_1 = __importDefault(require("../../../data/getRevenue.json"));
let RevenueService = class RevenueService {
    create(createRevenueDto) {
        return 'This action adds a new revenue';
    }
    findAll() {
        return this.getMockData();
    }
    findOne(id) {
        return `This action returns a #${id} revenue`;
    }
    update(id, updateRevenueDto) {
        return `This action updates a #${id} revenue`;
    }
    remove(id) {
        return `This action removes a #${id} revenue`;
    }
    getMockData() {
        return getRevenue_json_1.default;
    }
};
RevenueService = __decorate([
    (0, common_1.Injectable)()
], RevenueService);
exports.RevenueService = RevenueService;
//# sourceMappingURL=revenue.service.js.map