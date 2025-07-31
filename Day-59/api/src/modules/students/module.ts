import { Module } from '@nestjs/common';
import { StudentController } from './controllers';
import { StudentsService } from './services';
import {UserModule} from "@/modules/users/module";

@Module({
  imports: [UserModule],
  controllers: [StudentController],
  providers: [StudentsService],
})
export class StudentsModule {}
