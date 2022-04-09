import React, { useState } from 'react'

function QuestionAnswerCard({ q, userAnswer, setUserAnswer }) {

  const answers = q && q.answers.map(a => {
    return (
      <button className='answer-button' onClick={() => handleClick(q, a)}>{a.answer_text}</button>
    )
  })

  const handleClick = (q, a) => {
    debugger
    let answerObj = { ...userAnswer }
    answerObj[q.id] = a.correct
    debugger
    setUserAnswer(answerObj)
  }

  return (
    <div className='question-answer'>
      <div className='question'>
        {q && q.question_text}
      </div>
      <div className='answer-container'>
        {answers}
      </div>

    </div>
  )
}

export default QuestionAnswerCard