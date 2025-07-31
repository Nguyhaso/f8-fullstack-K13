import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {TopicService} from "./services";
import {ApiTags } from "@nestjs/swagger";
import {TopicReq} from "./dtos";
import {TopicServiceToken} from "@/shares/type/const";

@ApiTags('Topic')
@Controller('/topics')
export class TopicController {
  // dependency injection
  constructor(
    @Inject(TopicServiceToken)
    private topicService: TopicService) {}

  @Get()
  get() {
    return this.topicService.find()
  }

  @Post()
  create(@Body() topic: TopicReq) {
    return this.topicService.create(topic)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() topic: TopicReq) {
    return this.topicService.updateOne(Number(id), topic)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.topicService.softDelete(id)
  }
}