import { Customers } from 'src/modules/customers/entities/customer.entity';
import { Accounts } from "./account.entity";
export declare class Company {
    id: number;
    name: string | null;
    address: string | null;
    vatNo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    crNo: string | null;
    country: string | null;
    accounts: Accounts[];
    customers: Customers[];
}
export declare function remodelSOA(data: any): void;
