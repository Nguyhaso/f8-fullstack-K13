import { DataSource } from 'typeorm';
import { UsersEntity } from './entities';
import {DATA_SOURCE, SUBJECT_REPOSITORY} from "../../shares";

export const userProviders = [
  {
    provide: SUBJECT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UsersEntity),
    inject: [DATA_SOURCE],
  },
];