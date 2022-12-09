import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customers } from './entities/customer.entity';
export declare class CustomersService {
    private customerRepository;
    constructor(customerRepository: Repository<Customers>);
    create(createCustomerDto: CreateCustomerDto): Promise<CreateCustomerDto & Customers>;
    findAll(): Promise<Customers[]>;
    findOne(id: number): Promise<void>;
    update(id: number, updateCustomerDto: any): Promise<any>;
    remove(id: number): Promise<void>;
    getPortfolioKPIs(): Promise<({
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
    getPerformanceKPIs(): Promise<{
        title: string;
        percentage: number;
        graphValues: number[];
        increment: boolean;
        value: number;
        branchId: number;
        sortById: number;
    }[]>;
}
