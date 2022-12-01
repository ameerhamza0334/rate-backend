import { KpiService } from './kpi.service';
import { CreateKpiDto } from './dto/create-kpi.dto';
import { UpdateKpiDto } from './dto/update-kpi.dto';
export declare class KpiController {
    private readonly kpiService;
    constructor(kpiService: KpiService);
    create(createKpiDto: CreateKpiDto): string;
    findAll(): ({
        title: string;
        percentage: number;
        graphValues: number[];
        increment: boolean;
        value: number;
        branchId: number;
        sortById: number;
    } | {
        title: string;
        percentage: string;
        graphValues: number[];
        increment: boolean;
        value: number;
        branchId: number;
        sortById: number;
    })[];
    findOne(id: string): string;
    update(id: string, updateKpiDto: UpdateKpiDto): string;
    remove(id: string): string;
}
