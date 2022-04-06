import React, {useState} from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('username', username)
    console.log('password', password)
  }

  return (
    <div className='login-container'>
            <form className='form' onSubmit={e => handleLogin(e)}>
                <label>username:</label>
                <input onChange={e => setUsername(e.target.value)} type='text' placeholder='username' value={username}/>
                <label>password</label>
                <input onChange={e => setPassword(e.target.value)} type='password' placeholder='password' value={password}/>
                <button type='submit'>Login</button>
            </form>   
    </div>
  )
}

export default Login