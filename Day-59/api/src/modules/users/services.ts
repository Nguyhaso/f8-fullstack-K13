import {HttpException, HttpStatus, Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, SelectQueryBuilder} from 'typeorm';
import {
  ClassResI,
  ClassServiceI,
  DATA_SOURCE,
  LoginI,
  LoginResI, UserEntityRepository,
  UserI,
  UserReqI,
  UserServiceI,
  UserServiceToken
} from "@/shares";
import {ClassEntity} from "@/modules/classes/entities";
import {BaseService} from "@/modules/base/services";
import {UsersEntity} from "@/modules/users/entities";
import {createHash} from "node:crypto";
import {LoginReq} from "../Auth/dtos";
import {sign} from 'jsonwebtoken'

@Injectable()
export class UserService extends BaseService<UsersEntity> implements UserServiceI {

  constructor(
    // @Inject(DATA_SOURCE)
    // private dataSource: DataSource
    @Inject(UserEntityRepository)
    protected repository: Repository<UsersEntity>
  ) {
    super(repository)
  }

  protected getPublicColumns(): any {
    return super.getPublicColumns().filter(c => c != 'password');
  }


  async createUser(data: UserReqI) {
    const users: UserI[] = await this.find({email: data.email})
    // console.log(users)
    if (users.length > 0) {
      throw new HttpException('User already exists', HttpStatus.NOT_FOUND);
    } else if (users.length === 0) {
      const Sha256Password = createHash('sha256').update(data.password).digest('hex');
      const user = {...data, password: Sha256Password};
      this.create(user);
    }
  }

  async login(data: LoginReq): Promise<LoginResI> {
    const Sha256Password = createHash('sha256').update(data.password).digest('hex');

    const users: UserI[] = await this.find({email: data.email, password: Sha256Password});
    if (users.length === 0) {
      throw new HttpException('Wrong email or password', HttpStatus.NOT_FOUND);
    }

    const user: UserI = users[0];

    const token= sign({
      ...user,
      eat: Math.floor(Date.now() / 1000) + 600,
    }, process.env.PRIVATE_KEY);
    return {
      accessToken: token,
      refreshToken: sign(user, process.env.PRIVATE_KEY)

    }
  }


}