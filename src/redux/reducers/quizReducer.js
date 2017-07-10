// @flow
import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes'

/* type Option = {|
  +id: number,
  +correct: boolean,
  +text: string
|}

type Question = {|
  +id: number,
  +question: string,
  +options: Array<Option>
|} */

type QuizApp = {|
  +progress: number,
  +score: number,
  +answerSubmitted: boolean,
  +quizCompleted: boolean
|}

type Action = {
  +type: string
}

const quizAppState = {
  progress: 0,
  score: 0,
  answerSubmitted: false,
  quizCompleted: false
}

export function quizApp(state: QuizApp = quizAppState, action: Action) {
  switch (action.type) {
    case types.INCREMENT_PROGRESS:
      return Object.assign({}, state, {
        progress: state.progress + 1,
        answerSubmitted: false
      })

    case types.INCREMENT_SCORE:
      return Object.assign({}, state, {
        score: state.score + 1
      })

    case types.SUBMIT_ANSWER:
      return Object.assign({}, state, {
        answerSubmitted: true
      })

    case types.SUBMIT_QUIZ:
      return Object.assign({}, state, {
        quizCompleted: true
      })

    case types.RESET_QUIZ:
      return Object.assign({}, state, quizAppState)

    default:
      return state
  }
}

export default combineReducers({
  quizApp
})
