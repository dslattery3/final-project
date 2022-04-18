import React from 'react'
import { NavLink } from 'react-router-dom'


function QuizContainer({ quizzes }) {

  console.log(quizzes)
  const quizCards = quizzes && quizzes.filter((q, i) => i != 0).map((q, i) => {
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
      <h2>quiz Container</h2>
      <div>
        {quizzes && quizCards}
      </div>
    </div>
  )
}

export default QuizContainer