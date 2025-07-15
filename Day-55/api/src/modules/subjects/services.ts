import { Injectable } from "@nestjs/common";

@Injectable()
export class SubjectService {
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