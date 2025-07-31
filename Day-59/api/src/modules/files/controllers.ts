import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,StreamableFile
} from "@nestjs/common";
import {FileService} from "./services";
import {ApiTags} from "@nestjs/swagger";
import {FileReq} from "./dtos";
import {FileServiceToken} from "@/shares/type/const";
import { createReadStream } from 'fs';
import { join } from 'path'

@ApiTags('File')
@Controller('/files')
export class FileController {
  // dependency injection
  constructor(
    @Inject(FileServiceToken)
    private fileService: FileService) {
  }

  ///readfile
  @Get()
  read(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'src/files/Screenshot_20250502_220405.png'));
    return new StreamableFile(file, {
      type: 'image/png',
      // If you want to define the Content-Length value to another value instead of file's length:
      // length: 123,
    });
  }

  //
  // @Post()
  // upload(@Body() body: FileReqI): Promise<StreamableFile> {}

  ///
  // @Get()
  // get() {
  //   return this.fileService.find()
  // }
  //
  // @Post()
  // create(@Body() file: FileReq) {
  //   return this.fileService.create(file)
  // }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() file: FileReq) {
  //   return this.fileService.updateOne(Number(id), file)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number) {
  //   return this.fileService.softDelete(id)
  // }
}