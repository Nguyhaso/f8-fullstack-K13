import { Injectable } from "@nestjs/common";
import {UserService} from "@/modules/users/services";
import {TeacherReqI} from "@/shares";

@Injectable()
export class StudentsService extends UserService{
  async create(data: TeacherReqI): Promise<any> {
    return super.create({...data, role:'student'});
  }

  protected handleFind(query, condition): any {
    query = super.handleFind(query, condition);
    query.where({role : 'student'});
    return query
  }
}