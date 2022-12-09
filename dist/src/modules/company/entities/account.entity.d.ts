import { Company } from "./company.entity";
export declare class Accounts {
    id: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    currency: string;
    company: Company;
    accountsDetails: AccountsDetails[];
}
export declare class AccountsDetails {
    id: number;
    amount: number | null;
    voucherNo: string | null;
    description: string | null;
    transactionType: "credit" | "debit" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    vouhcerType: string | null;
    account: Accounts;
}
