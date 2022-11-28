import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Company> {
    return this.companyService.findOne(id);
  }
  @Post()
  async create(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<CreateCompanyDto & Company> {
    return this.companyService.save(createCompanyDto);
  }
  @Delete(':id')
  deleteOne(@Param('id') id): Promise<void> {
    return this.companyService.remove(id);
  }
}
