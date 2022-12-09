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
import { InvoiceDetails } from "./InvoiceDetails";
import { Customers } from "./Customers";

@Index("new_invoices_pkey", ["id"], { unique: true })
@Entity("invoices", { schema: "public" })
export class Invoices {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "invoice_no", nullable: true })
  invoiceNo: string | null;

  @Column("character varying", { name: "invoice_date", nullable: true })
  invoiceDate: string | null;

  @Column("character varying", { name: "order_no", nullable: true })
  orderNo: string | null;

  @Column("character varying", { name: "order_date", nullable: true })
  orderDate: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", { name: "total_amount", nullable: true })
  totalAmount: string | null;

  @OneToMany(() => ApprovalQueue, (approvalQueue) => approvalQueue.invoice)
  approvalQueues: ApprovalQueue[];

  @OneToMany(() => InvoiceDetails, (invoiceDetails) => invoiceDetails.invoice)
  invoiceDetails: InvoiceDetails[];

  @ManyToOne(() => Customers, (customers) => customers.invoices)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
