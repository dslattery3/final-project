import React from 'react'
import {NavLink} from 'react-router-dom'

function QuizCard({e}) {
    
  return (
    <NavLink to={`${e}`}>
        <button className='quiz-card'>
            <h1>quiz Card</h1>
            <h5>{e}</h5>
        </button>
    </NavLink>
    
  )
}

export default QuizCard