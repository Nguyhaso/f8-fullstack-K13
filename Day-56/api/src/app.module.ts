import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TeacherModule} from "./modules/teachers/module";
import {ClassModule} from "./modules/classes/module";
import {StudentsModule} from "./modules/students/module";
import {DatabaseModule} from './database/module';
import {SubjectModule} from "./modules/subjects/module";
import {UserModule} from "@/modules/users/module";
import {AnswerModule} from "@/modules/answers/module";
import {ExamResultModule} from "@/modules/examResults/module";
import {ExamModule} from "@/modules/exams/module";
import {ExamGroupModule} from "@/modules/examsGroups/module";
import {FileModule} from "@/modules/files/module";
import {UserClassModule} from "@/modules/userClass/module";
import {QuestionModule} from "@/modules/questions/module";
import {TopicModule} from "@/modules/topics/module";
import {JobModule} from "@/modules/jobs/module";

@Module({
  imports: [
    DatabaseModule,
    ClassModule,
    SubjectModule,
    UserModule,
    UserClassModule,
    ExamGroupModule,
    ExamModule,
    QuestionModule,
    AnswerModule,
    ExamResultModule,
    TopicModule,
    FileModule,
    JobModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
}
