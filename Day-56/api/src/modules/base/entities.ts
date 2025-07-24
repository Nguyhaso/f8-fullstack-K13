import {Column, PrimaryGeneratedColumn} from "typeorm";


export class Base1Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  createdAt: Date


  @Column({
    nullable: true
  })
  modifiedAt: Date


  @Column({
    nullable: true
  })
  deletedAt: Date

  @Column({
    nullable: true
  })
  deletedBy: number

}




export class BaseEntity extends Base1Entity{


  @Column({
    nullable: true
  })
  createdBy: number


  @Column({
    nullable: true
  })
  modifiedBy: number


  @Column({
    default: true
  })
  active: boolean
}

