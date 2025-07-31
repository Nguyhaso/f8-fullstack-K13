import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {FileServiceI, DATA_SOURCE, FileRepository} from "@/shares";
import {BaseService} from "@/modules/base/services";
import {FileEntity} from "./entities";

@Injectable()
export class FileService extends BaseService<FileEntity> implements FileServiceI {

  constructor(
    @Inject(FileRepository)
    protected repository: Repository<FileEntity>
  ) {
    super(repository)
  }


}