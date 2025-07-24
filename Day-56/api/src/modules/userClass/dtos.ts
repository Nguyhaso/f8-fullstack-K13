import {ApiProperty} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { UserClassReqI} from "../../shares";
import {StatusEnum} from "../../shares/type/enum";


export class UserClassReq implements UserClassReqI {
  @ApiProperty({
    example: 123,
  })
  @IsNumber()
  @IsNotEmpty()
  user_id: number

  @ApiProperty({
    example: 312,
  })
  @IsNumber()
  @IsNotEmpty()
  class_id: number



}