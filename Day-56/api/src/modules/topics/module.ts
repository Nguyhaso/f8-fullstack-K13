import { Module } from '@nestjs/common';
import { TopicController } from './controllers';
import { TopicService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {TopicEntity} from "./entities";
import {TopicRepository, TopicServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [TopicController],
  providers: [
    {
      provide: TopicRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(TopicEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: TopicServiceToken,
      useClass: TopicService
    }
  ],
})
export class TopicModule {}
