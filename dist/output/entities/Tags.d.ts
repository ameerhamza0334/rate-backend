import { Users } from "./Users";
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
