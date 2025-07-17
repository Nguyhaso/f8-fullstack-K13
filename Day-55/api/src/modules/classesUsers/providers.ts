import { DataSource } from 'typeorm';
import { ClassesUsersEntity } from './entities';
import {DATA_SOURCE, CLASS_USER_REPOSITORY} from "../../shares";

export const userProviders = [
  {
    provide: CLASS_USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassesUsersEntity),
    inject: [DATA_SOURCE],
  },
];