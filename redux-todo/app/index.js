import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import Login from './components/Login'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Login} />
      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
