import React from 'react'

function UserPage({user}) {

  // const image = user.profile_pic && <img src={user.profile_pic} alt='profile-pic' />
  console.log(user)
    
  return (
    <div>
      <img src={user ? user.profile_pic : null} alt={user ? 'profile-pic' : null}/>
      <h1>{user && `${user.username}'s Headquarters`}</h1>
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