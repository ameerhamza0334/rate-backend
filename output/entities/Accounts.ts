import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";
import { AccountsDetails } from "./AccountsDetails";

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

  @ManyToOne(() => Company, (company) => company.accounts)
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company: Company;

  @OneToMany(
    () => AccountsDetails,
    (accountsDetails) => accountsDetails.account
  )
  accountsDetails: AccountsDetails[];
}
