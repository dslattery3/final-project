import React, {useState} from 'react'

function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()    
    console.log('username', username)
    console.log('password', password)
    console.log('confirmPasswor', confirmPassword)
    if (password === confirmPassword){
      //do post
    }
    else{
      //create popup
    }
  }

  return (
    <div className='signup-container'>
            <form className='form' onSubmit={e => handleLogin(e)}>
                <label>username:</label>
                <input onChange={e => setUsername((e.target.value).toLowerCase())} type='text' placeholder='username' value={username}/>
                <label>password</label>
                <input onChange={e => setPassword(e.target.value)} type='password' placeholder='password' value={password}/>
                <label>confirm password</label>
                <input onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder='confirm password' value={confirmPassword}/>
                <button type='submit'>Submit</button>
            </form>        
    </div>
  )
}

export default SignUp