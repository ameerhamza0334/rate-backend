import { Customer } from 'src/modules/customers/entities/customer.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  vat_no: string;
  @OneToMany(() => Customer, (customer: Customer) => customer.company)
  customer: Customer[];
}
