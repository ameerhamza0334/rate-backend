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
import { Invoices } from "./Invoices";

@Index("customers_pkey", ["id"], { unique: true })
@Entity("customers", { schema: "public" })
export class Customers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "address", nullable: true })
  address: string | null;

  @Column("character varying", { name: "vat_no", nullable: true })
  vatNo: string | null;

  @Column("character varying", { name: "cr_no", nullable: true })
  crNo: string | null;

  @Column("character varying", { name: "place_of_supply", nullable: true })
  placeOfSupply: string | null;

  @Column("character varying", { name: "file_type", nullable: true })
  fileType: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", { name: "country", nullable: true })
  country: string | null;

  @Column("character varying", { name: "avatar", nullable: true })
  avatar: string | null;

  @ManyToOne(() => Company, (company) => company.customers)
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company: Company;

  @OneToMany(() => Invoices, (invoices) => invoices.customer)
  invoices: Invoices[];
}
