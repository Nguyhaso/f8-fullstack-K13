import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ClassUserService} from "./services";
import {ClassUserReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("ClassUser")
@Controller('/users')
export class ClassUserController {
  constructor(private classService: ClassUserService) {
  }

  @Get()
  get(){
    return this.classService.get()
  }
  @Post()
  creat(@Body()user: ClassUserReq){
    return this.classService.create(user)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()user: ClassUserReq){
    return this.classService.update(id, user)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.classService.delete(id)
  }
}