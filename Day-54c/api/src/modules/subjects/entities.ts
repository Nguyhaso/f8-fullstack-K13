import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('class')
export class SubjectEntity extends BaseEntity{

  @Column()
  code: string;

  @Column()
  name: string;


}