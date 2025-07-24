import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ClassResI, ClassServiceI, DATA_SOURCE, UserServiceI} from "@/shares";
import {ClassEntity} from "@/modules/classes/entities";
import {BaseService} from "@/modules/base/services";
import {UsersEntity} from "@/modules/users/entities";

@Injectable()
export class UserService extends BaseService<UsersEntity> implements UserServiceI {

  constructor(
    // @Inject(DATA_SOURCE)
    // private dataSource: DataSource
    @Inject('UserEntityRepository')
    protected repository: Repository<UsersEntity>
  ) {
    super(repository)
  }

  protected getPublicColumns(): any {
    return super.getPublicColumns().filter(c => c !='password');
  }
}