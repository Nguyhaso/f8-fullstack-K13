import { Module } from '@nestjs/common';
import { ExamResultController } from './controllers';
import { ExamResultService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {ExamResultEntity} from "./entities";
import {ExamResultRepository, ExamResultServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [ExamResultController],
  providers: [
    {
      provide: ExamResultRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ExamResultEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ExamResultServiceToken,
      useClass: ExamResultService
    }
  ],
})
export class ExamResultModule {}
