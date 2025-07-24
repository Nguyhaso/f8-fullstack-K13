interface AnswerBaseI {
  exam_result_id: number
  question_id: number
  answer:string
  is_correct: boolean
}


export interface AnswerI extends AnswerBaseI {
  id: number
}

export interface AnswerReqI extends AnswerBaseI {}
export interface AnswerResI extends AnswerBaseI {}