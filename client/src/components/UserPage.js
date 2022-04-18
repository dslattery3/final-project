import React from 'react'

function UserPage({ user, navigate }) {

  const userScores = user && user.userquizzes.map((o, i) => <h4 key={i}>{o.quiz}: {o.score} / {o.max_score}</h4>).reverse().splice(0, 3)

  const userStickers = user && user.useritems.map((e, i) => <img className='sticker' key={i} src={e.item} alt={e.name} />)

  return (
    <div>
      <div className='headline'>
        <h1>{user && `${user.username}'s Headquarters`}</h1>
        <h2>
          <img src='https://res.cloudinary.com/dxuhofgoz/image/upload/c_scale,w_12/v1650288711/SW:Sticker%20Collector/galactic_credits_a9ajkw.png' alt='galactic credits' /> {user && user.wallet}
        </h2>
      </div>
      <div className='user-avatar' style={{ marginBottom: '50px' }}>
        <a href={user && user.profile_pic_wiki} target="_blank">
          {user && <img onClick={() => console.log(user.profile_pic_wiki)} className='profile-pic' src={user.profile_pic} alt={user.profile_pic_name} />}
        </a>
        <p style={{ marginTop: '-10px' }}>{user && user.profile_pic_name}</p>
        <button onClick={() => navigate('/personality_quiz')}>choose an avatar</button>
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