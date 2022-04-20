import React, { useState } from 'react'

function SignUp({ setUser, navigate }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: confirmPassword
        })
      }).then(r => {
        if (r.ok) {
          r.json().then(data => {
            setUser(data)
            navigate('/personality_quiz')
          })
        }
      })
    }
    else {
      alert('password and confirm password do not match')
    }
  }

  return (
    <div className='signup-container'>
      <form className='form' onSubmit={e => handleSignUp(e)}>
        <label>username:</label>
        <input onChange={e => setUsername((e.target.value).toLowerCase())} type='text' placeholder='username' value={username} />
        <label>password</label>
        <input onChange={e => setPassword(e.target.value)} type='password' placeholder='password' value={password} />
        <label>confirm password</label>
        <input onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder='confirm password' value={confirmPassword} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUp