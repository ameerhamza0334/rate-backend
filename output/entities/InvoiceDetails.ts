import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";

@Index("new_invoice_details_pkey", ["id"], { unique: true })
@Entity("invoice_details", { schema: "public" })
export class InvoiceDetails {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "ser_no", nullable: true })
  serNo: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("integer", { name: "qty", nullable: true })
  qty: number | null;

  @Column("integer", { name: "rate", nullable: true })
  rate: number | null;

  @Column("integer", { name: "amount", nullable: true })
  amount: number | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoiceDetails)
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;
}
