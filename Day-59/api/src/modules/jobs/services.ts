import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {JobServiceI, DATA_SOURCE, JobRepository} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {JobEntity} from "./entities";

@Injectable()
export class JobService extends BaseService<JobEntity> implements JobServiceI {

  constructor(
    @Inject(JobRepository)
    protected repository: Repository<JobEntity>
  ) {
    super(repository)
  }


}