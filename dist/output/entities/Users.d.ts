import { ApprovalQueue } from "./ApprovalQueue";
import { Flags } from "./Flags";
import { Tags } from "./Tags";
import { Roles } from "./Roles";
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
