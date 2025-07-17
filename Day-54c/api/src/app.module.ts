import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TeachersModule} from "./modules/teachers/module";
import {ClassModule} from "./modules/classes/module";
import {StudentsModule} from "./modules/students/module";
import { DatabaseModule } from './database/module';
import {SubjectModule} from "./modules/subjects/module";

@Module({
  imports: [TeachersModule, ClassModule, StudentsModule,DatabaseModule,SubjectModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
