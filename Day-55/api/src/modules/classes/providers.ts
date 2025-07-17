import { DataSource } from 'typeorm';
import { ClassEntity } from './entities';
import {CLASS_REPOSITORY, DATA_SOURCE} from "../../shares";

export const subjectProviders = [
  {
    provide: CLASS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassEntity),
    inject: [DATA_SOURCE],
  },
];