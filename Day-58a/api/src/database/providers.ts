import {DataSource} from 'typeorm';
import {DATA_SOURCE} from "../shares";
import * as process from "node:process";
import {ImageEntity} from "@/modules/Image/entities";


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
          ImageEntity,

        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },

];
