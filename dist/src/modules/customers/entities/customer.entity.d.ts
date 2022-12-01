import { Company } from 'src/modules/company/entities/company.entity';
export declare class Customer {
    id: number;
    name: string;
    address: string;
    vat_no: string;
    cr_no: string;
    place_of_supply: string;
    file_type: string;
    company: Company;
}
