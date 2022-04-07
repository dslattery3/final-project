import React from 'react'
import {NavLink} from 'react-router-dom'

function Home({user}) {
  return (
    <div>
        <h1>@</h1>
        <h3>+++The+++</h3>
        <h3>Sticker</h3>
        <h3>Collector</h3>
        <h3>++++++++++</h3>        
        {!user && <>
          <div className='nav-button'>
              <NavLink to='/signup'>
              <button>Signup</button>
              </NavLink>
          </div>
          <div className='nav-button'>
              <NavLink to='/login'>
              <button>Login</button>
              </NavLink>
          </div>
        </>
        }        
    </div>
  )
}

export default Home