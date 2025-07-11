import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ClassService} from "./services";
import {ClassReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Class")
@Controller('/class')
export class ClassController {
  constructor(private classService: ClassService) {
  }

  @Get()
  get(){
    return this.classService.get()
  }
  @Post()
  creat(@Body()class1: ClassReq){
    return this.classService.create(class1)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()class1: ClassReq){
    return this.classService.update(id, class1)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.classService.delete(id)
  }
}