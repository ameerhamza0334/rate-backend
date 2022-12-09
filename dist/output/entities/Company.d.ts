import { Accounts } from "./Accounts";
import { Customers } from "./Customers";
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
