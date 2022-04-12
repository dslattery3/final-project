import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import UserPage from './UserPage.js'
import Home from './Home.js'
import SignUp from "./SignUp"
import Login from './Login.js'
import Logout from './Logout.js'
import QuizContainer from "./QuizContainer"
import QuizPage from "./QuizPage"
import PersonalityQuiz from "./PersonalityQuiz"

function App() {
  const [characters, setCharacters] = useState([])
  const [height, setHeight] = useState(0)
  const [user, setUser] = useState(null)
  const [quizzes, setQuizzes] = useState(null)
  const [userAnswer, setUserAnswer] = useState({})

  useEffect(() => {
    fetch('/me')
      .then(r => {
        if (r.ok) {
          r.json().then((data) => setUser(data))
        }
      })
  }, [])

  useEffect(() => {
    fetch('https://akabab.github.io/starwars-api/api/all.json')
      .then(r => r.json())
      .then(data => {
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
      }
      )
  }, [])

  useEffect(() => {
    fetch('/quizzes').then(r => r.json()).then(setQuizzes)
  }, [])

  const avgHeight = (arr) => {
    let initialSum = 0
    let heightArr = arr.map(o => o.height).filter(h => h !== undefined)
    const sum = heightArr.reduce((pV, cV) => pV + cV, initialSum)
    return (sum / heightArr.length)
  }

  const navigate = useNavigate()

  return (
    <div className="App">
      {user && <NavBar user={user} />}
      <Routes>
        <Route path='/user' element={<UserPage user={user} />} />
        <Route path='/personality_quiz' element={<PersonalityQuiz quizzes={quizzes} user={user} setUser={setUser} characters={characters} height={height} navigate={navigate} userAnswer={userAnswer} setUserAnswer={setUserAnswer} />} />
        <Route path='/quizzes/:id' element={<QuizPage quizzes={quizzes} userAnswer={userAnswer} setUserAnswer={setUserAnswer} user={user} setUser={setUser} navigate={navigate} />} />
        <Route path='/quizzes' element={<QuizContainer quizzes={quizzes} />} />
        <Route path='/signup' element={<SignUp setUser={setUser} navigate={navigate} />} />
        <Route path='/login' element={<Login setUser={setUser} navigate={navigate} />} />
        <Route path='/logout' element={<Logout setUser={setUser} navigate={navigate} />} />
        <Route path='/' element={<Home user={user} />} />
      </Routes>
    </div>
  );
}

export default App;