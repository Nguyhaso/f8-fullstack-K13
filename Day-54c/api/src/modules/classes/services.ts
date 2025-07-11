import { Injectable } from "@nestjs/common";

@Injectable()
export class ClassService {
  private classes:any = []

  get(){
    return this.classes;
  }

  create(class1:any){
    this.classes.push(class1);
    return class1
  }

  update(id, class1){
    return class1
  }

  delete(id){
    return {"msg": "delete successfully"}
  }
}