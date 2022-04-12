import React, { useState } from 'react'

function QuestionAnswerCard({ q, userAnswer, setUserAnswer, isActive, setIsActive }) {


  const answers = q && q.answers.map(a => {
    return (
      <button className={isActive[q.id] === a.answer_id ? 'active-answer-button' : 'answer-button'} onClick={() => handleClick(q, a)}>{a.answer_text}</button>
    )
  })

  const handleClick = (q, a) => {
    let answerObj = { ...userAnswer }
    answerObj[q.id] = a.correct
    setUserAnswer(answerObj)
    let activeObj = { ...isActive }
    activeObj[q.id] = a.answer_id
    setIsActive(activeObj)
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