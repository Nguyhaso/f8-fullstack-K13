interface TeacherBaseI {
  name: string
  email?: string
}


export interface TeacherI extends TeacherBaseI {
  id: number
}

export interface TeacherReqI extends TeacherBaseI {}
export interface TeacherResI extends TeacherBaseI {}