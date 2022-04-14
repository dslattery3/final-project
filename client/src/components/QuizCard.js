import React from 'react'
import { NavLink } from 'react-router-dom'

function QuizCard({ q }) {
  return (
    <NavLink to={`${q && q.id}`}>
      <button className='quiz-card'>
        <h1>{q && q.name}</h1>
        <h5>{q && q.max_score}</h5>
      </button>
    </NavLink>

  )
}

export default QuizCard