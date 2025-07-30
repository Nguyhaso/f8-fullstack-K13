import {Inject, Injectable, NotFoundException } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ImageEntityRepository, ImageServiceI, DATA_SOURCE, CLOUDINARY} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {ImageEntity} from "@/modules/Image/entities";
import { v2 as CloudinaryType, UploadApiResponse } from 'cloudinary';

@Injectable()
export class ImageService   {

  constructor(
    @Inject(CLOUDINARY)
    private cloudinary: typeof CloudinaryType,

    @Inject(ImageEntityRepository)
    protected imageRepository: Repository<ImageEntity>
  ) {}

///upload api
  async uploadImage(file: Express.Multer.File): Promise<ImageEntity> {
    const result: UploadApiResponse = await new Promise((resolve, reject) => {
      const stream = this.cloudinary.uploader.upload_stream(
        { folder: 'uploads' },
        (error, result) => {
          if (error || !result) return reject(error || new Error('Upload failed'));
          resolve(result);
        },
      );
      require('streamifier').createReadStream(file.buffer).pipe(stream);
    });

    const autoCropUrl = this.cloudinary.url(result.public_id,{
      crop: 'auto',
      gravity: 'auto',
      width: 500,
      height: 500,
    })

    const image = this.imageRepository.create({
      url: autoCropUrl,
      original_name: file.originalname,
      file_type: file.mimetype,
      size: file.size,
    });
console.log(result);
    return this.imageRepository.save(image);
  }
  ////

  findAll(){
    return this.imageRepository.find({
      where: {is_deleted: false},
    });
  }

  async findOne(id: number){

   const image= await this.imageRepository.findOne({
      where: {is_deleted: false, id:id},
    })

    if(!image) {
      throw new NotFoundException(`image ID ${id} not found or be deleted`);
    }
    return image;
  }

  async softDelete(id: number){
    await this.imageRepository.update(id,{
      is_deleted: true,
      deleted_at: new Date(),
    });
  }
}

