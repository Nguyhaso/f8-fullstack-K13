import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserClassService} from "./services";
import {UserClassReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("userClass")
@Controller('/userClass')
export class UserClassController {
  constructor(private UserClassService: UserClassService) {
  }

  @Get()
  get(){
    return this.UserClassService.find()
  }
  @Post()
  creat(@Body()user: UserClassReq){
    return this.UserClassService.create(user)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()user: UserClassReq){
    return this.UserClassService.updateOne(id, user)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.UserClassService.softDelete(id)
  }
}