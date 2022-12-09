import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { ApprovalQueue } from "../../company/entities/invoices.entity";
import { Roles } from "./roles.entity"

@Index("users_id_key", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
    @PrimaryGeneratedColumn({
        type: "integer",
        name: "id",


    })
    id: number | null;

    @Column("character varying", { name: "name" })
    name: string;

    @Column("character varying", { name: "email", nullable: true })
    email: string | null;

    @Column("character varying", { name: "phone_number", nullable: true })
    phoneNumber: string | null;

    @Column("text", { name: "address", nullable: true })
    address: string | null;

    @Column("timestamp without time zone", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("timestamp without time zone", { name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @Column("text", { name: "avatar", nullable: true })
    avatar: string | null;

    
    approvalQueues: ApprovalQueue[];

    @OneToMany(() => Flags, (flags) => flags.flagged)
    flags: Flags[];

    @OneToMany(() => Flags, (flags) => flags.flaggedBy)
    flags2: Flags[];

    @OneToMany(() => Tags, (tags) => tags.tagged)
    tags: Tags[];

    @OneToMany(() => Tags, (tags) => tags.taggedBy)
    tags2: Tags[];

    @ManyToOne(() => Roles, (roles) => roles.users)
    @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
    role: Roles;
}


@Entity("flags", { schema: "public" })
export class Flags {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number | null;

    @Column("text", { name: "comment", nullable: true })
    comment: string | null;

    @Column("timestamp without time zone", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("timestamp without time zone", { name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @Column("integer", { name: "refrence_id", nullable: true })
    refrenceId: number | null;

    @Column("enum", { name: "type", enum: ["invoice", "accounts"] })
    type: "invoice" | "accounts";

    @ManyToOne(() => Users, (users) => users.flags)
    @JoinColumn([{ name: "flagged", referencedColumnName: "id" }])
    flagged: Users;

    @ManyToOne(() => Users, (users) => users.flags2)
    @JoinColumn([{ name: "flagged_by", referencedColumnName: "id" }])
    flaggedBy: Users;
}






@Entity("tags", { schema: "public" })
export class Tags {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number | null;

    @Column("text", { name: "comment", nullable: true })
    comment: string | null;

    @Column("timestamp without time zone", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("timestamp without time zone", { name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @Column("integer", { name: "refrence_id", nullable: true })
    refrenceId: number | null;

    @Column("enum", { name: "type", enum: ["invoice", "accounts"] })
    type: "invoice" | "accounts";

    @ManyToOne(() => Users, (users) => users.tags)
    @JoinColumn([{ name: "tagged", referencedColumnName: "id" }])
    tagged: Users;

    @ManyToOne(() => Users, (users) => users.tags2)
    @JoinColumn([{ name: "tagged_by", referencedColumnName: "id" }])
    taggedBy: Users;
}
