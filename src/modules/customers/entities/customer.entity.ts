import { Company } from 'src/modules/company/entities/company.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  vat_no: string;
  @Column()
  cr_no: string;
  @Column()
  place_of_supply: string;
  @Column()
  file_type: string;

  @ManyToOne(() => Company, (company: Company) => company.customers)
  @JoinColumn({ name: 'company_id' })
  company: Company;
  // @ManyToOne(type=>Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;
}
