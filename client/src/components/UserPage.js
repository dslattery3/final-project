import React from 'react'

function UserPage({ user }) {
  // console.log(user)

  const userScores = user && user.userquizzes.map(o => <p>{o.quiz}: {o.score}</p>).reverse().splice(0, 3)

  const userStickers = user && user.useritems.map((e) => <img className='sticker' key={e.name} src={e.item} alt={e.name} />)

  return (
    <div>
      <h1>{user && `${user.username}'s Headquarters`}</h1>
      <div className='user-avatar'>
        <a href={user && user.profile_pic_wiki} target="_blank">
          <img onClick={() => console.log(user.profile_pic_wiki)} className='profile-pic' src={user ? user.profile_pic : null} alt={user ? user.profile_pic_name : null} />
        </a>
        <p>{user && user.profile_pic_name}</p>
      </div>
      <h3>collection</h3>
      <div className='user-collection'>
        {userStickers}
      </div>
      <h3>recent scores</h3>
      <div className='user-scores'>
        {userScores}
      </div>
    </div>
  )
}

export default UserPage