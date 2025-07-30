import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ImageModule} from "@/modules/Image/module";

@Module({
  imports: [ImageModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
