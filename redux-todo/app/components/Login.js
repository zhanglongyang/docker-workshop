import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

const Login = ({ dispatch }) => (
  <div>
    Name: <input type='text' name='name' defaultValue='admin'/> <br/>
    Password: <input type='password' name='password' defaultValue='admin'/> <br/>
    <button onClick={() => dispatch(login('admin', 'admin'))}>Login</button>
    <br/>
    <br/>
  </div>
)

export default connect()(Login)
