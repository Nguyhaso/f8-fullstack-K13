import { Injectable } from "@nestjs/common";

@Injectable()
export class TeachersService {
  private teacher:any = []

  get(){
    return this.teacher;
  }

  create(teacher:any){
    this.teacher.push(teacher);
    return teacher;
  }

  update(id, teacher){
    return teacher
  }

  delete(id){
    return {"msg": "delete successfully"}
  }
}