import {Inject, Injectable } from "@nestjs/common";
import {UserClassEntityRepository} from "@/shares";
import { Repository } from "typeorm";
import {BaseService} from "@/modules/base/services";
import {UserClassEntity} from "@/modules/userClass/entities";

@Injectable()
export class UserClassService extends BaseService<UserClassEntity> {
  constructor(
    @Inject(UserClassEntityRepository)
    protected repository: Repository<UserClassEntity>
  ) {
    super(repository);
  }
}