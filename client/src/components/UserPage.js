import React from 'react'

function UserPage({ user }) {
  console.log(user)

  return (
    <div>
      <h1>{user && `${user.username}'s Headquarters`}</h1>
      <img className='profile-pic' src={user ? user.profile_pic : null} alt={user ? 'profile-pic' : null} />
      <h3>Collection</h3>
      <div className='user-collection'>

      </div>
      <h3>Previous Scores</h3>
      <div className='user-scores'>

      </div>
    </div>
  )
}

export default UserPage