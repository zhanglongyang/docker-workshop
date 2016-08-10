import { combineReducers } from 'redux'
import login from './login'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  login,
  todos,
  visibilityFilter
})

export default todoApp
