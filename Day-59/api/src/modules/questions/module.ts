import { Module } from '@nestjs/common';
import { QuestionController } from './controllers';
import { QuestionService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {QuestionEntity} from "./entities";
import {QuestionRepository, QuestionServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [QuestionController],
  providers: [
    {
      provide: QuestionRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(QuestionEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: QuestionServiceToken,
      useClass: QuestionService
    }
  ],
})
export class QuestionModule {}
