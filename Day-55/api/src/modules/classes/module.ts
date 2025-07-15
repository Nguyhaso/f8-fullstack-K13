import { Module } from '@nestjs/common';
import { ClassController } from './controllers';
import { ClassService } from './services';

@Module({
  imports: [],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
