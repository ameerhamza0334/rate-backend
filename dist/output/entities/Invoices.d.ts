import { ApprovalQueue } from "./ApprovalQueue";
import { InvoiceDetails } from "./InvoiceDetails";
import { Customers } from "./Customers";
export declare class Invoices {
    id: number;
    invoiceNo: string | null;
    invoiceDate: string | null;
    orderNo: string | null;
    orderDate: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    totalAmount: string | null;
    approvalQueues: ApprovalQueue[];
    invoiceDetails: InvoiceDetails[];
    customer: Customers;
}
