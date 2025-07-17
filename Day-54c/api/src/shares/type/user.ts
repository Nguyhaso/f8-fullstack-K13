interface UserBaseI {
  email: string
  name: string
  password: string
  role: string
  status: string
  avatar: string
  parent_name: string
  parent_phone: string
}


export interface UserI extends UserBaseI {
  id: number
}

export interface UserReqI extends UserBaseI {}
export interface UserResI extends UserBaseI {}