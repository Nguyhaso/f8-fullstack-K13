import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {FileService} from "./services";
import {ApiTags } from "@nestjs/swagger";
import {FileReq} from "./dtos";
import {FileServiceToken} from "@/shares/type/const";

@ApiTags('File')
@Controller('/files')
export class FileController {
  // dependency injection
  constructor(
    @Inject(FileServiceToken)
    private fileService: FileService) {}

  @Get()
  get() {
    return this.fileService.find()
  }

  @Post()
  create(@Body() file: FileReq) {
    return this.fileService.create(file)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() file: FileReq) {
    return this.fileService.updateOne(Number(id), file)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.fileService.softDelete(id)
  }
}