
import { Module } from '@nestjs/common';
import {CloudinaryProvider} from './providers';

@Module({
  providers: [CloudinaryProvider],
  exports: [CloudinaryProvider],
})
export class CloudinaryModule {}
