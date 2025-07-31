import { Module } from '@nestjs/common';
import { ClassController } from './controllers';
import { ClassService } from './services';
import {DatabaseModule} from "../../database/module";
import {DATA_SOURCE} from "../../shares";
import {DataSource} from "typeorm";
import {ClassEntity} from "./entities";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [
    {
      provide: 'ClassEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassEntity),
      inject: [DATA_SOURCE]
    },
    ClassService
  ],
})
export class ClassModule {}
