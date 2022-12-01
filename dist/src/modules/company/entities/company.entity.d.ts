import { Customer } from 'src/modules/customers/entities/customer.entity';
export declare class Company {
    id: number;
    name: string;
    address: string;
    vat_no: string;
    customer: Customer[];
}
