import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to='/'>
            <button className='navbar-button'>Home</button>
        </NavLink>
        <NavLink to='/quizzes'>
            <button className='navbar-button'>Archives</button>
        </NavLink>
        <NavLink to='/user'>
            <button className='navbar-button'>User Page</button>
        </NavLink>
    </div>
  )
}

export default NavBar