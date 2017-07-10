import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import views from './viewsReducer'

const rootReducer = combineReducers({
  views,
  routing
})

export default rootReducer
