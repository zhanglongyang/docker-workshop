import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login from './login'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  login,
  todos,
  visibilityFilter,
  routerReducer
})

export default todoApp
