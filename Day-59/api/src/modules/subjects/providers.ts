import { DataSource } from 'typeorm';
import { SubjectEntity } from './entities';
import {DATA_SOURCE, SUBJECT_REPOSITORY} from "../../shares";

export const subjectProviders = [
  {
    provide: SUBJECT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(SubjectEntity),
    inject: [DATA_SOURCE],
  },
];