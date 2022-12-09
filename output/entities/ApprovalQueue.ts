import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Invoices } from "./Invoices";

@Entity("approval_queue", { schema: "public" })
export class ApprovalQueue {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number | null;

  @Column("boolean", {
    name: "approved",
    nullable: true,
    default: () => "false",
  })
  approved: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.approvalQueues)
  @JoinColumn([{ name: "assigned_to", referencedColumnName: "id" }])
  assignedTo: Users;

  @ManyToOne(() => Invoices, (invoices) => invoices.approvalQueues)
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;
}
