import React from 'react'
import {useParams} from 'react-router-dom'

function QuizPage({arr, quizzes}) {
    const {id} = useParams()
    console.log(id)
    const combined = [...arr]
    console.log('combined before', combined)
    quizzes && combined.push([...quizzes])
    const quiz = combined.filter(e => e == id)

  return (
    <div className='quiz-page'>
        quizPage
        <h3>{quizzes && quiz}</h3>
        <div className='quiz-container'>
            

        </div>


    </div>
  )
}

export default QuizPage