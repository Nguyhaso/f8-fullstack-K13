interface SubjectBaseI {
  code: string
  name?: string
}


export interface SubjectI extends SubjectBaseI {
  id: number
}

export interface SubjectReqI extends SubjectBaseI {}
export interface SubjectResI extends SubjectBaseI {}