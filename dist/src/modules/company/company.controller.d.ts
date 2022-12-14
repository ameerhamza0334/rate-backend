import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(): Promise<Company[]>;
    findOne(id: any): void;
    create(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyDto & Company>;
    deleteOne(id: any): Promise<void>;
    getAlSOA(id: any): Promise<{
        entities: Company[];
        raw: any[];
    }>;
}
