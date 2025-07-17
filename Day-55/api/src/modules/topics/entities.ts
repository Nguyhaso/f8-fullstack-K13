import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('topics')
export class TopicEntity extends BaseEntity{


  @Column()
  subject_id: number;

  @Column()
  code: number;

  @Column()
  name: string;



}