import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../base/entities";
import {StatusEnum} from "../../shares/type/enum";

@Entity('user')
export class UsersEntity  extends BaseEntity{

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.PENDING,
  } )
  status: StatusEnum;

  @Column()
  avatar: string;

  @Column( {length: 100 })
  parent_name: string;

  @Column({length : 20})
  parent_phone: string;
}