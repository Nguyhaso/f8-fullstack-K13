import {DatabaseModule} from "@/database/module";
import {
  DATA_SOURCE,
  UserClassEntityRepository,
  UserClassServiceToken,
} from "@/shares";
import { DataSource } from "typeorm";
import { Module } from "@nestjs/common";
import {UserClassService} from "@/modules/userClass/services";
import {UserClassEntity} from "@/modules/userClass/entities";

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    {
      provide: UserClassServiceToken,
      useClass: UserClassService
    },
    {
      provide: UserClassEntityRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(UserClassEntity),
      inject: [DATA_SOURCE]
    }
  ],
  exports: [UserClassEntityRepository, UserClassServiceToken]
})
export class UserClassModule {}