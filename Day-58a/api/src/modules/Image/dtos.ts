import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';
import { ImageReqI } from '@/shares';

export class ImageReq implements ImageReqI {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  public_id: number;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  original_name: string;


  @ApiProperty()
  @IsString()
  file_type: string;


  @ApiProperty()
  @IsString()
  size: string;

  @ApiProperty()
  @IsString()
  created_at: string;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  deleted_at: string;
}