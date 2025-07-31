import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {JobService} from "./services";
import {ApiTags } from "@nestjs/swagger";
import {JobReq} from "./dtos";
import {JobServiceToken} from "@/shares/type/const";

@ApiTags('Job')
@Controller('/jobs')
export class JobController {
  // dependency injection
  constructor(
    @Inject(JobServiceToken)
    private jobService: JobService) {}

  @Get()
  get() {
    return this.jobService.find()
  }

  @Post()
  create(@Body() job: JobReq) {
    return this.jobService.create(job)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() job: JobReq) {
    return this.jobService.updateOne(Number(id), job)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.jobService.softDelete(id)
  }
}