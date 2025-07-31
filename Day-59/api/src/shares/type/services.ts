import {
  ClassReqI,
  ClassResI,
  ExamGroupReqI,
  ExamReqI,
  ExamResultReqI,
  FileReqI, JobReqI, LoginI, LoginResI, QuestionReqI, TopicReqI,
  UserClassReqI,
  UserReqI
} from "@/shares";
import {InvitationI} from "@/shares/type/invitation";

export interface BaseServiceI <RequestI, ResponseI> {
  find: (params?: any) => Promise<ResponseI[]>
  findOne: (id: number) => Promise<ResponseI>
  create: (data: RequestI) => Promise<ResponseI>
  updateOne: (id: number, data: RequestI) => Promise<ResponseI>
  softDelete: (id: number) => void
  // getPublicColumns: () => string[]
}

export interface ClassServiceI extends BaseServiceI<ClassReqI, any> {}
export interface AnswerServiceI extends BaseServiceI<ClassReqI, any> {}
export interface UserServiceI extends BaseServiceI<UserReqI, any> {
  login: (loginReq: LoginI) => Promise<LoginResI>
}
export interface ExamResultServiceI extends BaseServiceI<ExamResultReqI, any> {}
export interface ExamServiceI extends BaseServiceI<ExamReqI, any> {}
export interface FileServiceI extends BaseServiceI<FileReqI, any> {}
export interface UserClassServiceI extends BaseServiceI<UserClassReqI, any> {}
export interface JobServiceI extends BaseServiceI<JobReqI, any> {}
export interface QuestionServiceI extends BaseServiceI<QuestionReqI, any> {}
export interface TopicServiceI extends BaseServiceI<TopicReqI, any> {}


export interface ExamGroupServiceI extends BaseServiceI<ExamGroupReqI, any> {}

export interface InvitationServiceI {
  invite: (invitation: InvitationI) => void
}