import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserService} from "./services";
import {UserReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("User")
@Controller('/users')
export class UserController {
  constructor(private classService: UserService) {
  }

  @Get()
  get(){
    return this.classService.get()
  }
  @Post()
  creat(@Body()user: UserReq){
    return this.classService.create(user)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()user: UserReq){
    return this.classService.update(id, user)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.classService.delete(id)
  }
}