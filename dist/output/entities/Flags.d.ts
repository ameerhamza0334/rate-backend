import { Users } from "./Users";
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
