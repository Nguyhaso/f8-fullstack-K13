import { Injectable } from "@nestjs/common";

@Injectable()
export class ClassService {
  private classes:any = []

  get(){
    return this.classes;
  }

  create(cls:any){
    this.classes.push(cls);
    console.log(cls);
    return cls
  }

  update(id, cls){
    return cls
  }

  delete(id){
    return {"msg": "delete successfully"}
  }
}