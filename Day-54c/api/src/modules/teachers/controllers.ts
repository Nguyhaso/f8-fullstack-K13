import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {TeachersService} from "./services";
import {TeacherReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Teachers")
@Controller('/teachers')
export class TeacherController {
  constructor(private teacherService: TeachersService) {
  }

  @Get()
  get(){
    return this.teacherService.get()
  }
  @Post()
  creat(@Body()teacher: TeacherReq){
    return this.teacherService.create(teacher)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()teacher: TeacherReq){
    return this.teacherService.update(id, teacher)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.teacherService.delete(id)
  }
}