import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

function NavBar() {
  const location = useLocation()
  const routes = [{pathname: '/', name: 'Home'}, {pathname: '/quizzes', name: 'Archives'}, {pathname: '/user', name: 'userPage'}]  
  const buttons = routes.filter(o => o.pathname != location.pathname).map((o,i) => {
    return(
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
          {/* <NavLink to='/'>
              <button className='navbar-button'>Home</button>
          </NavLink>
          <NavLink to='/quizzes'>
              <button className='navbar-button'>Archives</button>
          </NavLink>
          <NavLink to='/user'>
              <button className='navbar-button'>userPage</button>
          </NavLink> */}
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