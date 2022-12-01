import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
export declare class RevenueService {
    create(createRevenueDto: CreateRevenueDto): string;
    findAll(): {
        cash: {
            amount: number;
            increment: boolean;
            value: number;
            progress: number;
        };
        receivable: {
            amount: number;
            increment: boolean;
            value: number;
            progress: number;
        };
    };
    findOne(id: number): string;
    update(id: number, updateRevenueDto: UpdateRevenueDto): string;
    remove(id: number): string;
    getMockData(): {
        cash: {
            amount: number;
            increment: boolean;
            value: number;
            progress: number;
        };
        receivable: {
            amount: number;
            increment: boolean;
            value: number;
            progress: number;
        };
    };
}
