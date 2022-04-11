import React from 'react'
import QuizCard from './QuizCard'


function QuizContainer({ quizzes }) {
  console.log(quizzes)
  const quizCards = quizzes && quizzes.filter((q, i) => i != 0).map((q, i) => <QuizCard q={q} key={i} />)

  return (
    <div>
      <h2>quiz Container</h2>
      <div className='quiz-card-container'>
        {quizCards}
      </div>
    </div>
  )
}

export default QuizContainer