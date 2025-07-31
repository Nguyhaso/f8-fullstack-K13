import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {TeacherService} from "./services";
import {TeacherReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Teachers")
@Controller('/teachers')
export class TeacherController {
  constructor(private teacherService: TeacherService) {
  }

  @Get()
  get(){
    return this.teacherService.find()
  }
  @Post()
  creat(@Body()teacher: TeacherReq){
    return this.teacherService.create(teacher)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()teacher: TeacherReq){
    return this.teacherService.updateOne(id, teacher)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.teacherService.softDelete(id)
  }
}