import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../base/entities";
import {StatusEnum} from "../../shares/type/enum";

@Entity('teachers')
export class TeacherEntity  extends BaseEntity{

  @Column()
  name: string;

  @Column()
  email: string;

}