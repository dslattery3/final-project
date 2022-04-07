import React from 'react'

function Logout({setUser, navigate}) {
    const handleLogout = () => {
        fetch('/logout',{method: 'DELETE'})
        setUser(null)
        navigate('/')
    }

  return (
    <div>
        <h1>Logout</h1>

        <h4 style={{color: '#19f3ea'}}>Don't be gone for a long, long time</h4>

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout