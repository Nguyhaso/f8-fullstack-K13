import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ClassReqI} from "../../shares";


export class ClassReq implements ClassReqI {
  @ApiProperty({
    example: "<UNK>",
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: "code123",
    nullable: true,
    required: false,
  })
  @IsString()
  code: string


}