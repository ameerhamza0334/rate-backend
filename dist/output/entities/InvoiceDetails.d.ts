import { Invoices } from "./Invoices";
export declare class InvoiceDetails {
    id: number;
    serNo: string | null;
    description: string | null;
    qty: number | null;
    rate: number | null;
    amount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    invoice: Invoices;
}
