
import { DataSource } from 'typeorm';
import {DATA_SOURCE} from "../shares";
import * as process from "node:process";
import {UsersEntity} from "../modules/users/entities";
import {ClassEntity} from "../modules/classes/entities";
import { SubjectEntity } from 'src/modules/subjects/entities';
import {AnswerEntity} from "@/modules/answers/entities";
import {ExamResultEntity} from "@/modules/examResults/entities";
import {ExamEntity} from "@/modules/exams/entities";
import {ExamGroupEntity} from "@/modules/examsGroups/entities";
import { FileEntity } from '@/modules/files/entities';
import {QuestionEntity} from "@/modules/questions/entities";
import {UserClassEntity} from "@/modules/userClass/entities";
import {TopicEntity} from "@/modules/topics/entities";
import {JobEntity} from "@/modules/jobs/entities";

// console.log(process.env.POSTGRES_USER)
export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [
          // __dirname + '/../**/*.entity{.ts,.js}',
          ClassEntity,
          SubjectEntity,
         UserClassEntity,
          ExamGroupEntity,
          ExamEntity,
          QuestionEntity,
          AnswerEntity,
          ExamResultEntity,
          TopicEntity,
          FileEntity,
          JobEntity,
          UsersEntity,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },

];
