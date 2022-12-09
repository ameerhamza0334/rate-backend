import { Users } from "../entities/users.entity";
export declare class Roles {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    users: Users[];
}
