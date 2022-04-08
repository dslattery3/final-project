import React from 'react'
import QuizCard from './QuizCard'


function QuizContainer({arr}) {

  const cards = arr.map((e,i) => <QuizCard e={e} key={i}/>)

  return (
    <div>
      <h2>quiz Container</h2>
        <div className='quiz-card-container'>
          {cards}
        </div>
    </div>
  )
}

export default QuizContainer