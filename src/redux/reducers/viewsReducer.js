// @flow
import { combineReducers } from 'redux'
import * as types from '../actions/actionTypes'
import sectionConfig from '../../config/sectionConfig'

type ViewState = {
  +currentSection: number,
  +currentSubsection: number
}

const initialState = {
  currentSection: 0,
  currentSubsection: 0
}

export function viewState(state: ViewState = initialState, action: Object) {
  if (action.type === types.NEXT_VIEW) {
    console.info(state.currentSection)
    return Object.assign({}, state, {
      currentSection: state.currentSection + 1
    })
  }
  return state
}

type Section = {
  title: string,
  colour: string
}

export function sections(state: Array<Section> = sectionConfig) {
  return state
}

export default combineReducers({
  sections,
  viewState
})
