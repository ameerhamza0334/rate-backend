import { RevenueService } from './revenue.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
export declare class RevenueController {
    private readonly revenueService;
    constructor(revenueService: RevenueService);
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
    findOne(id: string): string;
    update(id: string, updateRevenueDto: UpdateRevenueDto): string;
    remove(id: string): string;
}
