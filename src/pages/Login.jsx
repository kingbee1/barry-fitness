import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <div className='login__form'>
        <input type="text" placeholder='email' />
        <br />
        <input type="password" placeholder='password' />
        <br />
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login
