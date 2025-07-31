import { Module } from '@nestjs/common';
import { ExamGroupController } from './controllers';
import { ExamGroupService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {ExamGroupEntity} from "./entities";
import {ExamGroupRepository, ExamGroupServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [ExamGroupController],
  providers: [
    {
      provide: ExamGroupRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ExamGroupEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ExamGroupServiceToken,
      useClass: ExamGroupService
    }
  ],
})
export class ExamGroupModule {}
