import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from './services';
import {DatabaseModule} from "../../database/module";
import {userProviders} from "./providers";
import {DataSource} from "typeorm";
import {ClassEntity} from "@/modules/classes/entities";
import {DATA_SOURCE} from "@/shares";
import {ClassService} from "@/modules/classes/services";
import {UsersEntity} from "@/modules/users/entities";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'UserEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(UsersEntity),
      inject: [DATA_SOURCE]
    },
    UserService
  ],
  exports: ['UserEntityRepository'],
})
export class UserModule {}
