import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/interceptors/errors.interceptor';


@Controller('company')
@UseInterceptors(TransformInterceptor)
@UseInterceptors(ErrorsInterceptor)

export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id){
    // return this.companyService.findOne(id);
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

  @Get('SOA/:id')
  getAlSOA(@Param('id') id) {
    return this.companyService.getAllSOA({ company_id: id })
  }

  @Get('kpi/performance')
  async getPerformanceKPI() {
    return this.companyService.getPerformanceKPIs()
  }

  @Get('kpi/portfolio')
  async getPortfolioKPI() {
    return this.companyService.getPortfolioKPIs()
  }

  @Get("revenue/:company_id")
  async getRevenues() {
    return this.companyService.getRevenues()
  }

  @Get("suppliers/:company_id")
  async getSuppliers() {
    return this.companyService.getSuppliers()
  }


}
