import {ApiProperty} from "@nestjs/swagger";
import {IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {UserReqI} from "../../shares";
import {StatusEnum} from "../../shares/type/enum";


export class UserReq implements UserReqI {
  @ApiProperty({
    example: "test name",
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: "mail link",
  })
  @IsString()
  email: string

  @ApiProperty({
    example: "avata link",
  })
  @IsString()
  avatar: string;

  @ApiProperty({
    example: "please put parent's name",
  })
  @IsString()
  parent_name: string;

  @ApiProperty({
    example: "please put parent's phone number",
  })
  @IsString()
  parent_phone: string;

  @ApiProperty({
    example: "123456",
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: "student",
  })
  @IsString()
  role: string;

  @ApiProperty({
    example: "pending",
  })

  @IsEnum(StatusEnum, {
    message: `Status must be one of: ${Object.values(StatusEnum).join(', ')}`,
  })
  status: StatusEnum;


}