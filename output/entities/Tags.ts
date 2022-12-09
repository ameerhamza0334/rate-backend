import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

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
