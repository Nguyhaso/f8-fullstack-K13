import { Module } from '@nestjs/common';
import { FileController } from './controllers';
import { FileService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {FileEntity} from "./entities";
import {FileRepository, FileServiceToken, DATA_SOURCE} from "@/shares/type/const";

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [
    {
      provide: FileRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(FileEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: FileServiceToken,
      useClass: FileService
    }
  ],
})
export class FileModule {}
