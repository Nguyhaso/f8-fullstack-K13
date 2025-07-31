interface ClassBaseI {
  name: string
  code?: string
  subject_id: number
}

//respond
export interface ClassI extends ClassBaseI {
  id: number
}
// create
export interface ClassReqI extends ClassBaseI {}
export interface ClassResI extends ClassI {}

