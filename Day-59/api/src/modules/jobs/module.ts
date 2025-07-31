import { Module } from '@nestjs/common';
import { JobController } from './controllers';
import { JobService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {JobEntity} from "./entities";
import {JobRepository, JobServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [JobController],
  providers: [
    {
      provide: JobRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(JobEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: JobServiceToken,
      useClass: JobService
    }
  ],
})
export class JobModule {}
