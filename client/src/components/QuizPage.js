import React from 'react'
import { useParams } from 'react-router-dom'
import QuestionAnswerCard from './QuestionAnswerCard'

function QuizPage({ quizzes, userAnswer, setUserAnswer, user, setUser, navigate }) {
  const { id } = useParams()
  const questionAnswers = quizzes && quizzes.find(q => q.id === parseInt(id)).questions.map(q => <QuestionAnswerCard q={q} key={q.id} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />)
  const handleQuizSumbit = () => {
    if (Object.values(userAnswer).length === questionAnswers.length) {
      const score = (Object.values(userAnswer).filter(e => e === true)).length
      const toScore = {
        quiz_id: id,
        user_id: user.id,
        score: score
      }
      fetch('/userquizzes', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(toScore)
      }).then(r => r.json()).then(data => {
        let newUser = { ...user }
        newUser.userquizzes.push(data)
        setUser(newUser)
        setUserAnswer({})
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
      <button onClick={() => handleQuizSumbit()} className='submit-answers-button'>Submit</button>
    </div>
  )
}

export default QuizPage