// @flow

export type Option = {
  +id: number,
  +text: string
};

export type Question = {
  +id: number,
  +question: string,
  +correctOption: number,
  +complete: Boolean,
  +options: Array<Option>
};

export type QuizItem = {
  +question: Option,
  +options: Array<Option>,
  +correctOption: number,
  +image: string,
  +currentQuestion: Question.id,
  +complete: boolean
};

declare type QuizActionType =
  | 'INCREMENT_PROGRESS'
  | 'INCREMENT_SCORE'
  | 'SUBMIT_ANSWER';

declare type QuizActionT<A: QuizActionType, P> = {|
  type: A,
  payload: P
|};

export type QuizAction =
  | QuizActionT<'INCREMENT_PROGRESS', null>
  | QuizActionT<'INCREMENT_SCORE', null>;
