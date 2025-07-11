import { Module } from '@nestjs/common';
import { StudentController } from './controllers';
import { StudentsService } from './services';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentsService],
})
export class StudentsModule {}
