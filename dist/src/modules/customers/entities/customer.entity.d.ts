import { Company } from 'src/modules/company/entities/company.entity';
import { Invoices } from '../../company/entities/invoices.entity';
export declare class Customers {
    id: number;
    name: string | null;
    address: string | null;
    vatNo: string | null;
    crNo: string | null;
    placeOfSupply: string | null;
    fileType: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    country: string | null;
    avatar: string | null;
    company: Company;
    invoices: Invoices[];
}
