import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customers } from './entities/customer.entity';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<CreateCustomerDto & Customers>;
    findAll(): Promise<Customers[]>;
    findOne(id: string): Promise<void>;
    update(id: string, updateCustomerDto: any): Promise<any>;
    remove(id: string): Promise<void>;
    getPerformanceKPI(): Promise<{
        title: string;
        percentage: number;
        graphValues: number[];
        increment: boolean;
        value: number;
        branchId: number;
        sortById: number;
    }[]>;
    getPortfolioKPI(): Promise<({
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
    })[]>;
}
