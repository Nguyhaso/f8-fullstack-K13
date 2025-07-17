import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('jobs')
export class JobEntity extends BaseEntity{


  @Column()
  name: string;



}