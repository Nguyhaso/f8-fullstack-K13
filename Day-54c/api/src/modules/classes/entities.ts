import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('class')
export class ClassEntity extends BaseEntity{

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  subject_id: number;

}