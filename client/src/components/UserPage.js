import React from 'react'

function UserPage({ user }) {
  const userScores = user && user.userquizzes.map(o => <h4>{o.quiz}: {o.score} / {o.max_score}</h4>).reverse().splice(0, 3)

  const userStickers = user && user.useritems.map(e => <img className='sticker' key={e.name} src={e.item} alt={e.name} />)

  return (
    <div>
      <h1>{user && `${user.username.toLowerCase()}'s Headquarters`}</h1>
      <div className='user-avatar' style={{ marginBottom: '50px' }}>
        <a href={user && user.profile_pic_wiki} target="_blank">
          {user && <img onClick={() => console.log(user.profile_pic_wiki)} className='profile-pic' src={user.profile_pic} alt={user.profile_pic_name} />}
        </a>
        <p style={{ marginTop: '-10px' }}>{user && user.profile_pic_name}</p>
      </div>
      <u><h2>collection</h2></u>
      <div className='user-collection'>
        {userStickers}
      </div>
      <u><h2>recent scores</h2></u>
      <div className='user-scores'>
        {userScores}
      </div>
    </div>
  )
}

export default UserPage