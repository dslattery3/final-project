import React from 'react'

function SignUp() {
  return (
    <div className='signup-container'>
        <div>
            <form className='form'>
                <label>username:</label>
                <input type='text' placeholder='Username'/>
                <label>password</label>
                <input type='password' placeholder='Password'/>
                <label>confirm password</label>
                <input type='password' placeholder='Confirm Password'/>
                <button type='submit'>Submit</button>
            </form>
        </div>        
    </div>
  )
}

export default SignUp