import React from 'react'
import {useParams} from 'react-router-dom'

function QuizPage({arr}) {
    const {id} = useParams()
    console.log(id)
    const quiz = arr.filter(e => e == id)

  return (
    <div className='quiz-page'>
        quizPage
        <h3>{quiz}</h3>
        <div className='quiz-container'>
            

        </div>


    </div>
  )
}

export default QuizPage