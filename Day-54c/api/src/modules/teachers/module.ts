import { Module } from '@nestjs/common';
import { TeacherController } from './controllers';
import { TeachersService } from './services';

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeachersService],
})
export class TeachersModule {}
