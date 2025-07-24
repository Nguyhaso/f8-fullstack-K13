import { Module } from '@nestjs/common';
import { TeacherController } from './controllers';
import { TeacherService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {TeacherEntity} from "./entities";
import {TeacherRepository, TeacherServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController],
  providers: [
    {
      provide: TeacherRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(TeacherEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: TeacherServiceToken,
      useClass: TeacherService
    }
  ],
})
export class TeacherModule {}
