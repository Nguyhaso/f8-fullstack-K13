import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {AnswerService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {AnswerReq} from "./dtos";
import {AnswerResI} from "@/shares";
import {AnswerServiceToken} from "@/shares/type/const";

@ApiTags('Answer')
@Controller('/answers')
export class AnswerController {
  // dependency injection
  constructor(
    @Inject(AnswerServiceToken)
    private answerService: AnswerService) {}

  @Get()
  get() {
    return this.answerService.find()
  }

  @Post()
  create(@Body() answer: AnswerReq) {
    return this.answerService.create(answer)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() answer: AnswerReq) {
    return this.answerService.updateOne(Number(id), answer)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.answerService.softDelete(id)
  }
}