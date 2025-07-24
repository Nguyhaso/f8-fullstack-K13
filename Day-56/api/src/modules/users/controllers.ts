import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./services";
import {UserReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("User")
@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  get(){
    return this.userService.find()
  }
  @Post()
  creat(@Body()user: UserReq){
    return this.userService.create(user)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()user: UserReq){
    return this.userService.updateOne(id, user)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.userService.softDelete(id)
  }
}