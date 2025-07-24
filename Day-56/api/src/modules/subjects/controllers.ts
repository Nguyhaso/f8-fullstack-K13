import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {SubjectService} from "./services";
import {SubjectReq} from "./dtos";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Subject")
@Controller('/subjects')
export class SubjectController {
  constructor(private classService: SubjectService) {
  }

  @Get()
  get(){
    return this.classService.get()
  }
  @Post()
  creat(@Body()subject: SubjectReq){
    return this.classService.create(subject)
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body()subject: SubjectReq){
    return this.classService.update(id, subject)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.classService.delete(id)
  }
}