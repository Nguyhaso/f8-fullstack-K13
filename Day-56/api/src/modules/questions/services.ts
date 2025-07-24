import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {QuestionServiceI, DATA_SOURCE, QuestionRepository} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {QuestionEntity} from "./entities";

@Injectable()
export class QuestionService extends BaseService<QuestionEntity> implements QuestionServiceI {

  constructor(
    @Inject(QuestionRepository)
    protected repository: Repository<QuestionEntity>
  ) {
    super(repository)
  }


}