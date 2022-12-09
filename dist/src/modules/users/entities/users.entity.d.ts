import { ApprovalQueue } from "../../company/entities/invoices.entity";
import { Roles } from "./roles.entity";
export declare class Users {
    id: number | null;
    name: string;
    email: string | null;
    phoneNumber: string | null;
    address: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    avatar: string | null;
    approvalQueues: ApprovalQueue[];
    flags: Flags[];
    flags2: Flags[];
    tags: Tags[];
    tags2: Tags[];
    role: Roles;
}
export declare class Flags {
    id: number | null;
    comment: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    refrenceId: number | null;
    type: "invoice" | "accounts";
    flagged: Users;
    flaggedBy: Users;
}
export declare class Tags {
    id: number | null;
    comment: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    refrenceId: number | null;
    type: "invoice" | "accounts";
    tagged: Users;
    taggedBy: Users;
}
