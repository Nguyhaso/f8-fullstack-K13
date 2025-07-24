import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ExamGroupService} from "./services";
import {ApiTags } from "@nestjs/swagger";
import {ExamGroupReq} from "./dtos";
import {ExamGroupServiceToken} from "@/shares/type/const";

@ApiTags('ExamGroup')
@Controller('/examGroups')
export class ExamGroupController {
  // dependency injection
  constructor(
    @Inject(ExamGroupServiceToken)
    private examGroupService: ExamGroupService) {}

  @Get()
  get() {
    return this.examGroupService.find()
  }

  @Post()
  create(@Body() examGroup: ExamGroupReq) {
    return this.examGroupService.create(examGroup)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() examGroup: ExamGroupReq) {
    return this.examGroupService.updateOne(Number(id), examGroup)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.examGroupService.softDelete(id)
  }
}