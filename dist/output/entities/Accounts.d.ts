import { Company } from "./Company";
import { AccountsDetails } from "./AccountsDetails";
export declare class Accounts {
    id: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    currency: string;
    company: Company;
    accountsDetails: AccountsDetails[];
}
