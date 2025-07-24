import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {QuestionService} from "./services";
import {ApiTags } from "@nestjs/swagger";
import {QuestionReq} from "./dtos";
import {QuestionServiceToken} from "@/shares/type/const";

@ApiTags('Question')
@Controller('/questions')
export class QuestionController {
  // dependency injection
  constructor(
    @Inject(QuestionServiceToken)
    private questionService: QuestionService) {}

  @Get()
  get() {
    return this.questionService.find()
  }

  @Post()
  create(@Body() question: QuestionReq) {
    return this.questionService.create(question)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() question: QuestionReq) {
    return this.questionService.updateOne(Number(id), question)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.questionService.softDelete(id)
  }
}