import { Injectable } from '@nestjs/common';
import { CreateKpiDto } from './dto/create-kpi.dto';
import { UpdateKpiDto } from './dto/update-kpi.dto';
import {data} from "../../../data/getKPI";
@Injectable()
export class KpiService {
  create(createKpiDto: CreateKpiDto) {
    return 'This action adds a new kpi';
  }

  findAll() {
    // return `This action returns all kpi`;
    return this.getMockData();
  }

  findOne(id: number) {
    return `This action returns a #${id} kpi`;
  }

  update(id: number, updateKpiDto: UpdateKpiDto) {
    return `This action updates a #${id} kpi`;
  }

  remove(id: number) {
    return `This action removes a #${id} kpi`;
  }
  getMockData(){
    return data;
  }
}
