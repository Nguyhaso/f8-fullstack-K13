import { Module } from '@nestjs/common';
import { ClassUserController } from './controllers';
import { ClassUserService } from './services';
import {DatabaseModule} from "../../database/module";
import {userProviders} from "./providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassUserController],
  providers: [...userProviders,ClassUserService],
})
export class ClassUserModule {}
