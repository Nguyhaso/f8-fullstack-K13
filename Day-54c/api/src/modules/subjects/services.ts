import {Inject, Injectable} from "@nestjs/common";
import { Repository } from 'typeorm';
import {SubjectEntity} from "./entities";
import {SUBJECT_REPOSITORY} from "../../shares";

@Injectable()
export class SubjectService {
  constructor(
    @Inject(SUBJECT_REPOSITORY)
    private photoRepository: Repository<SubjectEntity>,
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