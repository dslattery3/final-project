import React from 'react'

function Login() {
  return (
    <div className='login-container'>
        <div>
            <form className='form'>
                <label>username:</label>
                <input type='text' placeholder='username'/>
                <label>password</label>
                <input type='password' placeholder='password'/>
                <button type='submit'>Login</button>
            </form>
        </div>        
    </div>
  )
}

export default Login