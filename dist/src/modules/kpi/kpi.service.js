"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KpiService = void 0;
const common_1 = require("@nestjs/common");
const getKPI_1 = require("../../../data/getKPI");
let KpiService = class KpiService {
    create(createKpiDto) {
        return 'This action adds a new kpi';
    }
    findAll() {
        return this.getMockData();
    }
    findOne(id) {
        return `This action returns a #${id} kpi`;
    }
    update(id, updateKpiDto) {
        return `This action updates a #${id} kpi`;
    }
    remove(id) {
        return `This action removes a #${id} kpi`;
    }
    getMockData() {
        return getKPI_1.data;
    }
};
KpiService = __decorate([
    (0, common_1.Injectable)()
], KpiService);
exports.KpiService = KpiService;
//# sourceMappingURL=kpi.service.js.map