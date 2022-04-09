import React from 'react'
import { useParams } from 'react-router-dom'
import QuestionAnswerCard from './QuestionAnswerCard'

function QuizPage({ quizzes, userAnswer, setUserAnswer }) {
  const { id } = useParams()
  const questionAnswers = quizzes && quizzes.find(q => q.id === parseInt(id)).questions.map(q => <QuestionAnswerCard q={q} key={q.id} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />)

  return (
    <div className='quiz-page'>
      <h1>{quizzes && quizzes.find(q => q.id === parseInt(id)).name}</h1>
      <div className='quiz-question-container'>
        {questionAnswers}
      </div>
    </div>
  )
}

export default QuizPage