import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamServiceI, DATA_SOURCE, ExamRepository} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {ExamEntity} from "./entities";

@Injectable()
export class ExamService extends BaseService<ExamEntity> implements ExamServiceI {

  constructor(
    @Inject(ExamRepository)
    protected repository: Repository<ExamEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
      .createQueryBuilder('exam')
      .select(this.getPublicColumns())
  }
}