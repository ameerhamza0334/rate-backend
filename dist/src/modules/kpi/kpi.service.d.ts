import { CreateKpiDto } from './dto/create-kpi.dto';
import { UpdateKpiDto } from './dto/update-kpi.dto';
export declare class KpiService {
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
    findOne(id: number): string;
    update(id: number, updateKpiDto: UpdateKpiDto): string;
    remove(id: number): string;
    getMockData(): ({
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
}
