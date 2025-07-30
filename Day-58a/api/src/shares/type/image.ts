interface ImageBaseI {
  public_id: number
  url: string
  original_name:string
  file_type: string
  size: string
  created_at: string
  is_deleted: boolean
  deleted_at: string
}


export interface ImageI extends ImageBaseI {
  id: number
}

export interface ImageReqI extends ImageBaseI {}
export interface ImageResI extends ImageBaseI {}