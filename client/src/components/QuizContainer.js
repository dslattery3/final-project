import React from 'react'
import QuizCard from './QuizCard'


function QuizContainer({ quizzes }) {

  const quizCards = quizzes && quizzes.filter((q, i) => i != 0).map((q, i) => <QuizCard q={q} key={i} />)

  console.log('quizprops', quizzes)

  return (
    <div>
      <h2>quiz Container</h2>
      <div className='quiz-card-container'>
        {quizzes && quizCards}
      </div>
    </div>
  )
}

export default QuizContainer