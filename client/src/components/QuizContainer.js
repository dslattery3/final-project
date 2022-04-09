import React from 'react'
import QuizCard from './QuizCard'


function QuizContainer({arr, quizzes}) {

  // const cards = arr.map((e,i) => <QuizCard q={e} key={i}/>)
  const quizCards = quizzes && quizzes.map((q,i) => <QuizCard q={q} key={i} />)

  return (
    <div>
      <h2>quiz Container</h2>
        <div className='quiz-card-container'>
          {/* {cards} */}
          {quizCards}
        </div>
    </div>
  )
}

export default QuizContainer