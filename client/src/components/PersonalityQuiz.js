import React, { useState, useEffect } from 'react'
import QuestionAnswerCard from './QuestionAnswerCard'
import { patchUser, getCharacters } from '../tools/api'

function PersonalityQuiz({ quizzes, userAnswer, setUserAnswer, user, setUser, navigate, setIsActive, isActive }) {
    const [characters, setCharacters] = useState([])
    const [height, setHeight] = useState(0)

    useEffect(() => {
        getCharacters().then(data => {
            const people = data.map(o => {
                return {
                    name: o.name,
                    species: o.species,
                    gender: o.gender,
                    height: o.height,
                    wiki_page: o.wiki,
                    home: o.homeworld,
                    image: o.image
                }
            })
            setCharacters(people)
            setHeight(avgHeight(people))
            setIsActive({})
        }
        )
    }, [])

    const reducer = (pV, cV) => pV + cV

    const avgHeight = (arr) => {
        let heightArr = arr.map(o => o.height).filter(h => h !== undefined)
        const sum = heightArr.reduce(reducer, 0)
        return (sum / heightArr.length)
    }

    const pq = quizzes && quizzes.find(q => q.name === 'personality quiz').questions

    const questionAnswers = pq && pq.map(q => <QuestionAnswerCard q={q} key={q.id} userAnswer={userAnswer} setUserAnswer={setUserAnswer} isActive={isActive} setIsActive={setIsActive} />)

    const filterFunction = (human = userAnswer[pq[0].id], gender = userAnswer[pq[1].id], tall = userAnswer[pq[2].id], hc = userAnswer[pq[3].id]) => {
        const hot = ['tatooine', 'jakku', 'ryloth', 'stewjon', 'rodia', 'socorro', 'bespin', 'sullust', 'neimoidia', 'dathomir', 'tund', 'glee anselm', 'iktotch', 'geonosis', 'concord dawn', 'zolan', 'kalee', 'yavin 4']
        const temp = ['eriadu', 'kashyyk', 'coruscant', 'corellia', 'bestine', 'trandosha', 'mon cala', 'endor', 'toydaria', 'malastare', 'aleen', 'haruun kal', 'cerea', 'nar shaddaa', 'quermia', 'dorin', 'champala', 'serenno', 'alderaan', 'skako', 'shili', 'utapau', 'parnassos']
        const cold = ['chandrilla', 'naboo', 'kamino', 'vulpter', 'mirial', 'ojom', 'scipio', 'umbara']
        let copy = []
        human ? copy = [...characters].filter(c => c.species === "human") : copy = [...characters].filter(c => c.species != "human")
        gender ? copy = copy.filter(c => c.gender === "male") : copy = copy.filter(c => c.gender != "male")
        tall ? copy = copy.filter(c => c.height >= height) : copy = copy.filter(c => c.height < height)
        hc ? copy = copy.filter(c => !cold.includes(c.home)) : copy = copy.filter(c => !hot.includes(c.home))
        return copy[Math.floor(Math.random() * copy.length)]
    }

    console.log(characters.filter(o => o.home === 'parnassos'))

    const handleQuizSumbit = () => {
        const randomElement = filterFunction()
        const body = JSON.stringify({
            profile_pic: randomElement.image,
            profile_pic_name: randomElement.name.toLowerCase(),
            profile_pic_wiki: randomElement.wiki_page
        })
        patchUser(user.id, body).then(data => {
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