import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ExamService} from "./services";
import {ApiTags } from "@nestjs/swagger";
import {ExamReq} from "./dtos";
import {ExamServiceToken} from "@/shares/type/const";

@ApiTags('Exam')
@Controller('/exams')
export class ExamController {
  // dependency injection
  constructor(
    @Inject(ExamServiceToken)
    private examService: ExamService) {}

  @Get()
  get() {
    return this.examService.find()
  }

  @Post()
  create(@Body() exam: ExamReq) {
    return this.examService.create(exam)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() exam: ExamReq) {
    return this.examService.updateOne(Number(id), exam)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.examService.softDelete(id)
  }
}