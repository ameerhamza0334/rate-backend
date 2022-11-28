import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number): Promise<Company> {
    return this.companyRepository.findOneBy({ id });
  }
  async save(body: CreateCompanyDto): Promise<CreateCompanyDto & Company> {
    return await this.companyRepository.save(body);
  }
  async remove(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }
}
