import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../base/entities";
import {StatusEnum} from "../../shares/type/enum";

@Entity('classes_users')
export class UserClassEntity  extends BaseEntity{

  @Column()
  userId: number;

  @Column()
  classId: number;

}