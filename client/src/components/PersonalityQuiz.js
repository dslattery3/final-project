import React from 'react'
import QuestionAnswerCard from './QuestionAnswerCard'

function PersonalityQuiz({ characters, height, quizzes, userAnswer, setUserAnswer, user, setUser, navigate, setIsActive, isActive }) {

    // quizzes && quizzes.find(q => q.name === "personality quiz").questions.forEach(q => setUserAnswer)

    let pqResults = []

    const questionAnswers = quizzes && quizzes.find(q => q.name === "personality quiz").questions.map(q => <QuestionAnswerCard q={q} key={q.id} userAnswer={userAnswer} setUserAnswer={setUserAnswer} isActive={isActive} setIsActive={setIsActive} />)

    const filterFunction = (human = userAnswer[1], gender = userAnswer[2], tall = userAnswer[3], hc = userAnswer[4]) => {
        const hot = ['tatooine', 'jakuu', 'ryloth', 'stewjon', 'rodia', 'socorro', 'bespin', 'sullust', 'neimoidia', 'dathomir', 'tund', 'glee anselm', 'iktotch', 'geonosis', 'concord dawn', 'zolan', 'kalee', 'yavin 4', 'parnassos']
        const temp = ['eriadu', 'kashyyk', 'coruscant', 'corellia', 'bestine', 'trandosha', 'mon cala', 'endor', 'toydaria', 'malastare', 'aleen', 'haruun kal', 'cerea', 'nar shaddaa', 'quermia', 'dorin', 'champala', 'serenno', 'alderaan', 'skako', 'shili', 'utapau']
        const cold = ['chandrilla', 'naboo', 'kamino', 'vulpter', 'mirial', 'ojom', 'scipio', 'umbara']
        let copy = []
        human ? copy = [...characters].filter(c => c.species === "human") : copy = [...characters].filter(c => c.species != "human")
        gender ? copy = copy.filter(c => c.gender === "male") : copy = copy.filter(c => c.gender != "male")
        tall ? copy = copy.filter(c => c.height >= height) : copy = copy.filter(c => c.height < height)
        hc ? copy = copy.filter(c => !cold.includes(c.home)) : copy.filter(c => !hot.includes(c.home))
        return copy
    }

    const handleQuizSumbit = () => {
        pqResults = filterFunction()
        const randomElement = pqResults[Math.floor(Math.random() * pqResults.length)]
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                profile_pic: randomElement.image,
                profile_pic_name: randomElement.name,
                profile_pic_wiki: randomElement.wiki_page
            })
        }).then(r => r.json()).then(data => {
            setUser(data)
            setUserAnswer({})
            navigate('/user')
        })
    }

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