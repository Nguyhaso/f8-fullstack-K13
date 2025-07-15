interface StudentBaseI {
  name: string
  email?: string
  school: string
  parent_name?: string
  parent_phone?: number
  avatar?: AvatarI
}
export interface AvatarI{
  id: number,
  url: string,
  payload: string
}

export interface StudentI extends StudentBaseI {
  id: number
}

export interface StudentReqI extends StudentBaseI {}
export interface StudentResI extends StudentBaseI {}