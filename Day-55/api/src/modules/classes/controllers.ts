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
  creat(@Body()cls: ClassReq){
    return this.classService.create(cls)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()cls: ClassReq){
    return this.classService.update(id, cls)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.classService.delete(id)
  }
}