import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamGroupServiceI, DATA_SOURCE, ExamGroupRepository} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {ExamGroupEntity} from "./entities";

@Injectable()
export class ExamGroupService extends BaseService<ExamGroupEntity> implements ExamGroupServiceI {

  constructor(
    @Inject(ExamGroupRepository)
    protected repository: Repository<ExamGroupEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
      .createQueryBuilder('examGroup')
      .select(this.getPublicColumns())
  }
}