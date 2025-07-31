import { Module } from '@nestjs/common';
import { AnswerController } from './controllers';
import { AnswerService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {AnswerEntity} from "./entities";
import {AnswerEntityRepository, AnswerServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [AnswerController],
  providers: [
    {
      provide: AnswerEntityRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(AnswerEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: AnswerServiceToken,
      useClass: AnswerService
    }
  ],
})
export class AnswerModule {}
