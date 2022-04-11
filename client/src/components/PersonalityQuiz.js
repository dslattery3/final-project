import React from 'react'
import QuestionAnswerCard from './QuestionAnswerCard'

function PersonalityQuiz({ characters, height, quizzes, userAnswer, setUserAnswer, user, setUser, navigate }) {
    const questionAnswers = quizzes && quizzes.find(q => q.name === "personality quiz").questions.map(q => <QuestionAnswerCard q={q} key={q.id} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />)

    console.log(quizzes)

    const filterFunction = (human, gender, height, hc) => {
        let copy = [...characters]
        console.log(userAnswer[1])
        console.log(userAnswer[2])
        console.log(userAnswer[3])
        console.log(userAnswer[4])
    }


    const handleQuizSumbit = () => {
        // if (Object.values(userAnswer).length === questionAnswers.length) {
        //     let filterCharacters = [...characters].filter(c => {
        //         if (userAnswer[1] && c.species == 'human') {
        //             return c
        //         }
        //         else if (!userAnswer[1] && c.species != 'human') {
        //             return c
        //         }
        //     })
        //     console.log(filterCharacters)
        // }
        // else {
        //     alert('You did not answer all questions')
        // }
        filterFunction()
    }

    console.log(userAnswer)

    return (
        <div className='quiz-page'>
            <h1>{quizzes && quizzes.find(q => q.name === "personality quiz").name}</h1>
            <div className='quiz-question-container'>
                {questionAnswers}
            </div>
            <button onClick={() => handleQuizSumbit()} className='submit-answers-button'>Submit</button>
        </div>
    )
}

export default PersonalityQuiz