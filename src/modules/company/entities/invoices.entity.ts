import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";


import { Customers } from "../../customers/entities/customer.entity";
import { Users } from "../../users/entities/users.entity"
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
