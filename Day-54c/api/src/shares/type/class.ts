interface ClassBaseI {
  name: string
  code?: string
}

//respond
export interface ClassI extends ClassBaseI {
  id: number
}
// create
export interface ClassReqI extends ClassBaseI {}
export interface ClassResI extends ClassI {}

