export interface QuestionOption {
  label: string;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  answer: string;
}

export interface QuestionGroup {
  id: number;
  title: string;
  context?: string;
  questions: Question[];
}