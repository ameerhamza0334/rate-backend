import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accounts } from "./Accounts";
import { Customers } from "./Customers";

@Index("company_pkey", ["id"], { unique: true })
@Entity("company", { schema: "public" })
export class Company {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "address", nullable: true })
  address: string | null;

  @Column("character varying", { name: "vat_no", nullable: true })
  vatNo: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", { name: "cr_no", nullable: true })
  crNo: string | null;

  @Column("character varying", { name: "country", nullable: true })
  country: string | null;

  @OneToMany(() => Accounts, (accounts) => accounts.company)
  accounts: Accounts[];

  @OneToMany(() => Customers, (customers) => customers.company)
  customers: Customers[];
}
