import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation()
  const routes = [{ pathname: '/', name: 'Home' }, { pathname: '/user', name: 'userPage' }, { pathname: '/quizzes', name: 'Archives' }, { pathname: '/store', name: 'cantina' }]
  const buttons = routes.filter(o => o.pathname != location.pathname).map((o, i) => {
    return (
      <NavLink to={o.pathname} key={i}>
        <button className='navbar-button'>{o.name}</button>
      </NavLink>
    )
  })
  const logout = (location.pathname == '/logout')

  return (
    <div className='navbar'>
      <div className='nav-left'>
        {buttons}
      </div>
      <div className='nav-right'>
        {!logout &&
          <NavLink to='/logout'>
            <button id='logout-button'>Logout</button>
          </NavLink>
        }
      </div>
    </div>
  )
}

export default NavBar