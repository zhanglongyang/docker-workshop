const login = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      fetch('http://localhost:3002/oauth/token', {
        method: 'post',
        headers: {
		        'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0'
	      },
        body: 'grant_type=password&username=admin&password=admin'
      }).then(function(res) {
        return res.json()
      }).then(function(v) {
        console.log(v)
        window.location.href = "/#app"
      })

      return true
    default:
      return state
  }
}

export default login
