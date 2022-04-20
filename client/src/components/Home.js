import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'

function Home({ user }) {
  return (
    <div>
      <div className='video'>
        <ReactPlayer
          url="https://www.dropbox.com/s/d7xzf344bp2dpby/vlc-record-2022-04-19-11h07m55s-test.mp4-.mp4?dl=0"
          playing={true}
          loop={true}
          volume={0}
          muted={true}
          width='65%'
          height='auto'
        />
      </div>
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