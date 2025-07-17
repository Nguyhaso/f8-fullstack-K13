import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {SubjectReqI} from "../../shares";


export class SubjectReq implements SubjectReqI {
  @ApiProperty({
    example: "test name",
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: "test code",
    nullable: true,
    required: false,
  })
  @IsString()
  code: string


}