import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";

@Index("accounts_details_pkey", ["id"], { unique: true })
@Entity("accounts_details", { schema: "public" })
export class AccountsDetails {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "amount", nullable: true })
  amount: number | null;

  @Column("character varying", { name: "voucher_no", nullable: true })
  voucherNo: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("enum", {
    name: "transaction_type",
    nullable: true,
    enum: ["credit", "debit"],
  })
  transactionType: "credit" | "debit" | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", { name: "vouhcer_type", nullable: true })
  vouhcerType: string | null;

  @ManyToOne(() => Accounts, (accounts) => accounts.accountsDetails)
  @JoinColumn([{ name: "account_id", referencedColumnName: "id" }])
  account: Accounts;
}
