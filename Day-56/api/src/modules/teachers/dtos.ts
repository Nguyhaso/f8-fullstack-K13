import { ApiProperty } from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";
import { TeacherReqI } from "../../shares";

export class TeacherReq implements TeacherReqI {
  // @ApiProperty({
  //   example: '123',
  // })
  // @IsNumber()
  // id:number

  @ApiProperty({
    example: 'name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'email',
  })
  @IsString()
  email?: string;
}