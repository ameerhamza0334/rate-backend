import { Customers } from "../../customers/entities/customer.entity";
import { Users } from "../../users/entities/users.entity";
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
export declare class ApprovalQueue {
    id: number | null;
    approved: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    assignedTo: Users;
    invoice: Invoices;
}
