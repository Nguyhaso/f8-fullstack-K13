import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Base1Entity} from "../base/entities";
import {StatusEnum} from "../../shares/type/enum";

@Entity('classesUsers')
export class ClassesUsersEntity  extends Base1Entity{

  @Column()
  user_id: number;

  @Column()
  class_id: number;

}