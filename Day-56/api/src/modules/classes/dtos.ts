import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ClassReqI} from "../../shares";


export class ClassReq implements ClassReqI {
  @ApiProperty({
    example: "<ahih>",
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: "code1asds23",
    nullable: true,
    required: false,
  })
  @IsString()
  code: string

  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  subject_id: number;


}