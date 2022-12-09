import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Entity("flags", { schema: "public" })
export class Flags {
  @PrimaryGeneratedColumn({ type: "integer", name: "id"})
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
