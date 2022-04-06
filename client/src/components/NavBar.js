import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div>NavBar
        <NavLink to='/'>
            <button>Home</button>
        </NavLink>
        <NavLink to='/quizzes'>
            <button>Archives</button>
        </NavLink>
        <NavLink to='/user'>
            <button>User Page</button>
        </NavLink>
    </div>
  )
}

export default NavBar