import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <NavLink to='/'>
            <button className='navbar-button'>Home</button>
        </NavLink>
        <NavLink to='/quizzes'>
            <button className='navbar-button'>Archives</button>
        </NavLink>
        <NavLink to='/user'>
            <button className='navbar-button'>userPage</button>
        </NavLink>
      </div>
      <div className='nav-right'>
        <button id='logout-button'>Logout</button>
      </div>
        
    </div>
  )
}

export default NavBar