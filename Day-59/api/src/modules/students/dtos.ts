import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {AvatarI, StudentReqI} from "../../shares";

class Avatar implements AvatarI {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  payload: string;
}

export class StudentReq implements StudentReqI {


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

  @ApiProperty({example: 'parent name'})
  @IsString()
  parent_name: string;

  @ApiProperty({example: 123456789})
  @IsNumber()
  parent_phone: number;

  @ApiProperty({example: 'ABC School'})
  @IsString()
  @IsNotEmpty()
  school: string;

  @ApiProperty({type: Avatar})
  avatar: Avatar;

}