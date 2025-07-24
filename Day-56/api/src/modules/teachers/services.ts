import {Inject, Injectable } from "@nestjs/common";
import { TeacherRepository} from "@/shares";
import { Repository } from "typeorm";
import {BaseService} from "@/modules/base/services";
import {TeacherEntity} from "@/modules/teachers/entities";

@Injectable()
export class TeacherService extends BaseService<TeacherEntity> {
  constructor(
    @Inject(TeacherRepository)
    protected repository: Repository<TeacherEntity>
  ) {
    super(repository);
  }
}