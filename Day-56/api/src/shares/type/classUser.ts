interface UserClassBaseI {
  class_id: number
  user_id: number
}


export interface UserClassI extends UserClassBaseI {
  id: number
}

export interface UserClassReqI extends UserClassBaseI {}
export interface UserClassResI extends UserClassBaseI {}