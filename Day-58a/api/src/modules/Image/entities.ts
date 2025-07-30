import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../base/entities";

@Entity('images')
export class ImageEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  original_name: string;

  @Column()
  file_type: string;

  @Column('int')
  size: number;

  @Column({
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  created_at: Date;

 @Column({
   default: false,
 })
  is_deleted: boolean;

 @Column({
   type: "timestamp",
   nullable: true,
 })
  deleted_at: Date | null;
}