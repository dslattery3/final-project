import React, { useState } from 'react'
import { postLogin } from '../tools/api'

function Login({ setUser, navigate }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const body = JSON.stringify({
      username: username,
      password: password
    })
    postLogin(body).then(r => {
      if (r.ok) {
        r.json().then(data => {
          console.log(data)
          setUser(data)
          data.profile_pic ?
            navigate('/user')
            :
            navigate('/personality_quiz')
        })
      }
      else {
        r.json().then(console.log)
      }
    })
  }

  return (
    <div className='login-container'>
      <form className='form' onSubmit={e => handleLogin(e)}>
        <label>username:</label>
        <input onChange={e => setUsername(e.target.value)} type='text' placeholder='username' value={username} />
        <label>password</label>
        <input onChange={e => setPassword(e.target.value)} type='password' placeholder='password' value={password} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login