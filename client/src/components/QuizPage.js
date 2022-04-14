import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuestionAnswerCard from './QuestionAnswerCard'
import { postUserQuizzes } from '../tools/api'

function QuizPage({ quizzes, navigate, userAnswer, setUserAnswer, isActive, setIsActive, user, setUser }) {
  const { id } = useParams()

  if (quizzes && parseInt(id) === quizzes[0].id) {
    navigate('/quizzes')
  }

  const questionAnswers = quizzes && quizzes.find(q => q.id === parseInt(id)).questions.map(q => <QuestionAnswerCard q={q} key={q.id} userAnswer={userAnswer} setUserAnswer={setUserAnswer} isActive={isActive} setIsActive={setIsActive} />)

  const handleQuizSumbit = () => {
    const score = (Object.values(userAnswer).filter(e => e === true)).length
    if (Object.values(userAnswer).length === questionAnswers.length) {
      const toScore = {
        quiz_id: id,
        user_id: user.id,
        score: score
      }
      postUserQuizzes(JSON.stringify(toScore)).then(data => {
        setUser(data)
        setUserAnswer({})
        setIsActive({})
        navigate('/user')
      })
    }
    else {
      alert('You did not answer all questions')
    }
  }

  return (
    <div className='quiz-page'>
      <h1>{quizzes && quizzes.find(q => q.id === parseInt(id)).name}</h1>
      <div className='quiz-question-container'>
        {questionAnswers}
      </div>
      <button onClick={handleQuizSumbit} className='submit-answers-button'>Submit</button>
    </div>
  )
}

export default QuizPage