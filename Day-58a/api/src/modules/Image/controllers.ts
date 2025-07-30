import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put, UploadedFile, UseInterceptors,
} from "@nestjs/common";
import {ImageService} from "./services";
import {ApiBody, ApiConsumes, ApiHeader, ApiTags} from "@nestjs/swagger";
import {ImageReq} from "./dtos";
import {ImageResI, ImageServiceToken} from "@/shares";
import {FileInterceptor} from "@nestjs/platform-express";
import {ImageEntity} from "@/modules/Image/entities";

@ApiTags('Image')
@Controller('/images')
export class ImageController {
  // dependency injection
  constructor(
    @Inject(ImageServiceToken)
    private imageService: ImageService) {
  }

  @Get()
  get() {
    return this.imageService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        }
      }
    }
  })
  async uploadImage(
    @UploadedFile() file: Express.Multer.File): Promise<ImageEntity> {
    return this.imageService.uploadImage(file)
  }

  @Put(':id')
  delete(@Param('id') id: string) {
    return this.imageService.softDelete(+id)
  }
}