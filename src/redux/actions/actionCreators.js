import * as types from './actionTypes'

export function nextView(previousSection) {
  console.info('@@NEXT_VIEW', previousSection)
  return {
    type: types.NEXT_VIEW,
    payload: previousSection
  }
}
