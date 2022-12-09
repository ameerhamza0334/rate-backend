import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ApprovalQueue } from "./ApprovalQueue";
import { Flags } from "./Flags";
import { Tags } from "./Tags";
import { Roles } from "./Roles";

@Index("users_id_key", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "id"

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

  @OneToMany(() => ApprovalQueue, (approvalQueue) => approvalQueue.assignedTo)
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
