import { DataSource } from 'typeorm';
import { ClassEntity } from './entities';
import {DATA_SOURCE} from "../../shares";

export const subjectProviders = [
  {
    provide: 'CLASSES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassEntity),
    inject: [DATA_SOURCE],
  },
];