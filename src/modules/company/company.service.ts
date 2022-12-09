import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { Company, remodelSOA } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';


@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
  ) {

  }
  getHello(): string {
    return 'Hello World!';
  }
  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return this.companyRepository.findOne({ id });

  }
  async save(body: CreateCompanyDto): Promise<CreateCompanyDto & Company> {
    return await this.companyRepository.save(body);
  }
  async remove(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }

  async getAllSOA(query) {
    try {
      let entityManager = getConnection().manager

      let soa_sql = `SELECT 
    company.id      AS company_id,
    company.name    AS company_name,
    company.address AS company_address,
    company.vat_no  AS company_vat_no,
    company.country AS company_country,

    c.id            AS customer_id,
    c.name          AS custsomer_name,
    c.vat_no        AS customer_vat_no,
    c.country       AS customer_country,
    c.vat_no        AS customer_vat_no,
    c.cr_no         AS customer_cr_no,
    c.address       AS customer_address,
    c.file_type     AS customer_file_type,
    c.avatar        AS customer_avatar,

    a.id            AS account_id,
    a.currency,

    ad.id           AS account_detail_id,
    ad.amount,
    ad.description,
    ad.transaction_type,
    ad.voucher_no,
    ad.vouhcer_type,
    ad.created_at   AS started_date,

    ta.tagged,
    u.name          AS tagged_user_name,
    u.avatar        AS tagged_user_avatar,
    ta.comment,
    ta.created_at   AS comment_created_at,

    fa.flagged,
    u2.name         AS flagged_user_name,
    u2.avatar       AS flagged_user_avatar


FROM company company
      INNER JOIN accounts a ON company.id = a.company_id
      INNER JOIN accounts_details ad ON a.id = ad.account_id
      INNER JOIN customers c ON company.id = c.company_id
      LEFT OUTER JOIN flags fa ON a.id = fa.refrence_id
      LEFT OUTER JOIN tags ta ON a.id = ta.refrence_id
      LEFT OUTER JOIN users u ON ta.tagged = u.id
      LEFT OUTER JOIN users u2 ON fa.flagged = u.id
WHERE company.id = ${Number(query.company_id)}
AND (ta.type IS NULL OR ta.type = 'accounts')
AND (fa.type IS NULL OR fa.type = 'accounts');`
      console.log(soa_sql);
      let soa_data = await entityManager.query(soa_sql)
      return remodelSOA(soa_data)
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }

  }


}
