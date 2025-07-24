import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamResultServiceI, DATA_SOURCE, ExamResultRepository} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {ExamResultEntity} from "@/modules/examResults/entities";

@Injectable()
export class ExamResultService extends BaseService<ExamResultEntity> implements ExamResultServiceI {

  constructor(
    @Inject(ExamResultRepository)
    protected repository: Repository<ExamResultEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
      .createQueryBuilder('examResult')
      .select(this.getPublicColumns())
  }
}