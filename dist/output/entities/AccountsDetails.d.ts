import { Accounts } from "./Accounts";
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
