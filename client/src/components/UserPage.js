import React from 'react'

function UserPage({user}) {


  return (
    <div>
      <h1>{user && user.username}'s Headquarters</h1>
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