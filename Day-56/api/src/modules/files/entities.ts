import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('files')
export class FileEntity extends BaseEntity{


  @Column()
  url: string;

  @Column()
  key: string;


}