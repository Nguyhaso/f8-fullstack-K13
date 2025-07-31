import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { JobReqI } from '@/shares';

export class JobReq implements JobReqI {
  @ApiProperty({
    example: 'test name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}