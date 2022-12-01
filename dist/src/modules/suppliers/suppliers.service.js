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
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const getSuppliers_json_1 = __importDefault(require("../../../data/getSuppliers.json"));
let SuppliersService = class SuppliersService {
    create(createSupplierDto) {
        return 'This action adds a new supplier';
    }
    findAll() {
        return this.getMockData();
    }
    findOne(id) {
        return `This action returns a #${id} supplier`;
    }
    update(id, updateSupplierDto) {
        return `This action updates a #${id} supplier`;
    }
    remove(id) {
        return `This action removes a #${id} supplier`;
    }
    getMockData() {
        return getSuppliers_json_1.default;
    }
};
SuppliersService = __decorate([
    (0, common_1.Injectable)()
], SuppliersService);
exports.SuppliersService = SuppliersService;
//# sourceMappingURL=suppliers.service.js.map