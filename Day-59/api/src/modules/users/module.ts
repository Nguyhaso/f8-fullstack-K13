import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {ClassEntity} from "@/modules/classes/entities";
import {DATA_SOURCE, UserEntityRepository, UserServiceToken} from "@/shares";
import {ClassService} from "@/modules/classes/services";
import {UsersEntity} from "@/modules/users/entities";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    {
      provide: UserEntityRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(UsersEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: UserServiceToken,
      useClass: UserService
    }
  ],
  exports: [UserEntityRepository, UserServiceToken],
})
export class UserModule {}
