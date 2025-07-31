import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ExamResultService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {ExamResultReq} from "./dtos";
import {ExamResultResI} from "@/shares";
import {ExamResultServiceToken} from "@/shares/type/const";

@ApiTags('ExamResult')
@Controller('/exams')
export class ExamResultController {
  // dependency injection
  constructor(
    @Inject(ExamResultServiceToken)
    private examService: ExamResultService) {}

  @Get()
  get() {
    return this.examService.find()
  }

  @Post()
  create(@Body() examResult: ExamResultReq) {
    return this.examService.create(examResult)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() examResult: ExamResultReq) {
    return this.examService.updateOne(Number(id), examResult)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.examService.softDelete(id)
  }
}