import React from 'react'
import QuizCard from './QuizCard'


function QuizContainer({quizzes}) {
  const quizCards = quizzes && quizzes.map((q,i) => <QuizCard q={q} key={i} />)

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