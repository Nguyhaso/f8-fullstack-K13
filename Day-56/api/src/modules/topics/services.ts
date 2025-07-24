import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {TopicServiceI, DATA_SOURCE, TopicRepository} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {TopicEntity} from "./entities";

@Injectable()
export class TopicService extends BaseService<TopicEntity> implements TopicServiceI {

  constructor(
    @Inject(TopicRepository)
    protected repository: Repository<TopicEntity>
  ) {
    super(repository)
  }


}