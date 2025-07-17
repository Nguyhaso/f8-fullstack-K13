import {Inject, Injectable} from "@nestjs/common";
import { Repository } from 'typeorm';
import {ClassesUsersEntity} from "./entities";
import {CLASS_USER_REPOSITORY} from "../../shares";

@Injectable()
export class ClassUserService {
  constructor(
    @Inject(CLASS_USER_REPOSITORY)
    private photoRepository: Repository<ClassesUsersEntity>,
  ) {}
  private classes:any = []

  get(){
    return this.classes;
  }

  create(subject:any){
    this.classes.push(subject);
    console.log(subject);
    return subject
  }

  update(id, subject){
    return subject
  }

  delete(id){
    return {"msg": "delete successfully"}
  }
}