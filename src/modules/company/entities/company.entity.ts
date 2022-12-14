import { Customers } from 'src/modules/customers/entities/customer.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index } from 'typeorm';

import {Accounts} from "./account.entity"

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




export function remodelSOA(data) {
  let resp = []
  let rows_data = data
  if (rows_data.length > 0) {
    console.log(rows_data);
    let first_row_data = rows_data[0]
    let company_data = {
      id: first_row_data.company_id,
      name: first_row_data.company_name,
      address: first_row_data.company_address,
      country: first_row_data.company_country,
      VATNo: first_row_data.company_vat_no
    }


    let customer_ids = rows_data.map(row => {
      return row.customer_id
    });
    customer_ids = Array.from(new Set(customer_ids))
    console.log(customer_ids)

    let customers = customer_ids.map((customer_id) => {
      let customer_soa = rows_data.filter(rows => rows.customer_id === customer_id)
      console.log(customer_soa)
      let total_years = customer_soa.filter(x => x.description === 'Opening Balance').map(x => x.started_date.getFullYear())
      let years_soa = customer_soa.filter(x => total_years)


      return {}
    })

    console.log(customers)
    let customer_data = {
      name: first_row_data.custsomer_name,
      profilePic: first_row_data.customer_avatar,
      address: first_row_data.customer_address,
      country: first_row_data.customer_country,
      VATNo: first_row_data.customer_vat_no,
      CRNo: first_row_data.customer_cr_no,
      fileType: first_row_data.customer_file_type
    }

    let opening_of_soa = rows_data.filter(row => {
      if (row.description === 'Opening Balance')
        return row
    })
    console.log(opening_of_soa)
    let closing_of_soa = rows_data.filter(row => {
      if (row.description === 'Closing Balance')
        return row
    })
    console.log(closing_of_soa)
    let soa = []
    resp.push({ company: company_data, customer: customer_data, soa: soa })
  }

}