import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('exam_group')
export class ExamGroupEntity extends BaseEntity {

  @Column()
  name: string;

  @Column()
  class_id: number;

  @Column()
  start_time: string;

  @Column()
  await_time: string;

  @Column()
  is_once: boolean;

  @Column()
  is_save_local: boolean;
}