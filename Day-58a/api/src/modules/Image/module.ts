import { Module } from '@nestjs/common';
import { ImageController } from './controllers';
import { ImageService } from './services';
import {DatabaseModule} from "../../database/module";
import {DataSource} from "typeorm";
import {ImageEntity} from "./entities";
import {DATA_SOURCE, ImageEntityRepository, ImageServiceToken} from '@/shares';
import {CloudinaryModule} from "@/modules/cloudinary/module";

@Module({
  imports: [DatabaseModule, CloudinaryModule],
  controllers: [ImageController],
  providers: [
    {
      provide: ImageEntityRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ImageEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ImageServiceToken,
      useClass: ImageService
    }
  ],
})
export class ImageModule {}
