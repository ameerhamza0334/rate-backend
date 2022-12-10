import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./company.entity";


@Index("accounts_pkey", ["id"], { unique: true })
@Entity("accounts", { schema: "public" })
export class Accounts {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    id: number;

    @Column("timestamp without time zone", { name: "created_at", nullable: true })
    createdAt: Date | null;

    @Column("timestamp without time zone", { name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @Column("character varying", { name: "currency", default: () => "'SAR'" })
    currency: string;

    @Column("character varying", { name: "opening_balance", nullable: true })
    openingBalance: string;

    @Column("character varying", { name: "closing_balance", nullable: true })
    closingBalance: string;

    @Column("timestamp without time zone", { name: "start_date", nullable: true })
    startDate: Date | null;

    @Column("timestamp without time zone", { name: "end_date", nullable: true })
    endDate: Date | null;

    @Column("integer", { name: "total_debit", nullable: true })
    totalDebit: number | null

    @Column("integer", { name: "total_credit", nullable: true })
    totalCredit: number | null

    @ManyToOne(() => Company, (company) => company.accounts)
    @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
    company: Company;

    @OneToMany(
        () => AccountsDetails,
        (accountsDetails) => accountsDetails.account
    )
    accountsDetails: AccountsDetails[];
}


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
