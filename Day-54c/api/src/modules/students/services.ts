import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentsService {
  private student:any = []

  get(){
    return this.student;
  }

  create(student:any){
    this.student.push(student);
    return student;
  }

  update(id, student){
    return student
  }

  delete(id){
    return {"msg": "delete successfully"}
  }
}