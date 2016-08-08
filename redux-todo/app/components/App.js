import React from 'react'
import Login from './Login'
import TodoApp from './TodoApp'

let app = <TodoApp/>
if (true) {
  app = <Login/>
}

const App = () => (
  <div>
    {app}
  </div>
)

export default App
