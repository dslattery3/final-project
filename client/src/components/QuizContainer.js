import React from 'react'
import { NavLink } from 'react-router-dom'


function QuizContainer({ quizzes }) {

  const quizCards = quizzes && quizzes.filter((q, i) => i !== 0).map((q, i) => {
    return (
      <NavLink to={`${q && q.id}`}>
        <button>
          <h1>{q && q.name}</h1>
        </button>
      </NavLink>
    )
  })

  return (
    <div>
      <h2>quizzes</h2>
      <div className='card-container'>
        {quizzes && quizCards}
      </div>
    </div>
  )
}

export default QuizContainer