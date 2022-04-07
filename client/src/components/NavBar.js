import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar({user}) {
  return (
    <div className='navbar'>
      {user &&
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
      }
      {user && 
        <div className='nav-right'>
          <NavLink to='/logout'>
            <button id='logout-button'>Logout</button>
          </NavLink>          
        </div>
      }
    </div>
  )
}

export default NavBar