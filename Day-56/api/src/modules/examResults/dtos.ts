import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsObject } from 'class-validator';
import { ExamResultReqI } from '@/shares';

//payload / body
export class ExamResultReq implements ExamResultReqI {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  exam_id: number;

  @ApiProperty({
    example: 'pending',
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    example: {},
  })
  @IsObject()
  answers: object;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  number_of_correct_answer: number;

  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  score: number;
}