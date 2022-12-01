import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompanyService {
    private companyRepository;
    constructor(companyRepository: Repository<Company>);
    getHello(): string;
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company>;
    save(body: CreateCompanyDto): Promise<CreateCompanyDto & Company>;
    remove(id: string): Promise<void>;
}
