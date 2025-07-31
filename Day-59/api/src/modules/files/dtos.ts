import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { FileReqI } from '@/shares';

export class FileReq implements FileReqI {
  @ApiProperty({
    example: 'url',
  })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({
    example: '1123',
  })
  @IsString()
  @IsNotEmpty()
  key: string;
}