import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { AnswerEntityRepository, AnswerServiceI, DATA_SOURCE} from "@/shares";
import {AnswerEntity} from "@/modules/answers/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class AnswerService extends BaseService<AnswerEntity> implements AnswerServiceI {

  constructor(
    // @Inject(DATA_SOURCE)
    // private dataSource: DataSource
    @Inject(AnswerEntityRepository)
    protected repository: Repository<AnswerEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
      .createQueryBuilder('answer')
      .select(this.getPublicColumns())
  }
}