import React from 'react'

function UserPage({ user }) {
  console.log(user)

  const userScores = user && user.userquizzes.map(o => <p>{o.quiz}: {o.score}</p>).reverse().splice(0, 3)

  return (
    <div>
      <h1>{user && `${user.username}'s Headquarters`}</h1>
      <img className='profile-pic' src={user ? user.profile_pic : null} alt={user ? 'profile-pic' : null} />
      <h3>collection</h3>
      <div className='user-collection'>

      </div>
      <h3>recent scores</h3>
      <div className='user-scores'>
        {userScores}
      </div>
    </div>
  )
}

export default UserPage