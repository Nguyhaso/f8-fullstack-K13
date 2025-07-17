import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('exam_results')
export class ExamResultEntity extends BaseEntity{


  @Column()
  user_id: number;

  @Column()
  exam_id: number;

  @Column({
    type:'enum',
    enum:['done', 'not finished'],
    default: 'done'
  })
  status: string;

  @Column()
  answer: string;

  @Column()
  number_of_correct_answer: number;

  @Column()
  score: number;


}