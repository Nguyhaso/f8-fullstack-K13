import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from './services';
import {DatabaseModule} from "../../database/module";
import {userProviders} from "./providers";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders,UserService],
})
export class UserModule {}
