import {Column, Entity} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('answers')
export class AnswerEntity extends BaseEntity{


  @Column()
  exam_result_id: number;

  @Column()
  question_id: number;

  @Column()
  answer: string;

  @Column()
  is_correct: boolean;


}