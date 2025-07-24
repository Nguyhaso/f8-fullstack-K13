interface ClassBaseI {
  name: string
  code: string
  users: UserI[]
}


export interface ClassI extends ClassBaseI {
  id: number
}

export interface ClassReqI extends ClassBaseI {}
export interface ClassResI extends ClassBaseI {}

export interface UserI{
  id: number
}