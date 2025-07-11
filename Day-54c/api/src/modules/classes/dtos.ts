import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";
import {ClassReqI, UserI} from "../shares";
class User implements UserI{
  @IsNumber()
  id: number;
}

export class ClassReq implements ClassReqI {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  code: string

  @ApiProperty({type: User})
  users: User[]
}