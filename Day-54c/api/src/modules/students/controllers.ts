import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {StudentsService} from "./services";
import {StudentReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Students")
@Controller('/students')
export class StudentController {
  constructor(private studentService: StudentsService) {
  }

  @Get()
  get(){
    return this.studentService.get()
  }
  @Post()
  creat(@Body()student: StudentReq){
    return this.studentService.create(student)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()student: StudentReq){
    return this.studentService.update(id, student)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.studentService.delete(id)
  }
}