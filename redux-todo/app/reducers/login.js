const login = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('============', state, action)
      fetch('http://localhost:3002/oauth/token', {
        method: 'POST',
        mode: 'no-cors'
      }).then(function(res) {
        console.log(res)
      })
      return true
    default:
      return state
  }
}

export default login
