import { Users } from "./Users";
import { Invoices } from "./Invoices";
export declare class ApprovalQueue {
    id: number | null;
    approved: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    assignedTo: Users;
    invoice: Invoices;
}
