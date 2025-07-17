import {Inject, Injectable} from "@nestjs/common";
import { Repository } from 'typeorm';
import {UsersEntity} from "./entities";
import {SUBJECT_REPOSITORY} from "../../shares";

@Injectable()
export class UserService {
  constructor(
    @Inject(SUBJECT_REPOSITORY)
    private photoRepository: Repository<UsersEntity>,
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