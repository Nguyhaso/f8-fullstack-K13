import { Module } from '@nestjs/common';
import { ExamController } from './controllers';
import { ExamService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {ExamEntity} from "./entities";
import {ExamRepository, ExamServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [ExamController],
  providers: [
    {
      provide: ExamRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ExamEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ExamServiceToken,
      useClass: ExamService
    }
  ],
})
export class ExamModule {}
