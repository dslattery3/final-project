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
import Footer from "./Footer"
import { getQuizzes } from "../tools/api"

function App() {
  const [user, setUser] = useState(null)
  const [quizzes, setQuizzes] = useState(null)
  const [userAnswer, setUserAnswer] = useState({})
  const [isActive, setIsActive] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me')
      .then(r => {
        if (r.ok) {
          r.json().then((data) => setUser(data))
        }
      })
  }, [])

  console.log(user)

  useEffect(() => {
    getQuizzes().then(setQuizzes)
  }, [])


  const quizProps = {
    user,
    setUser,
    quizzes,
    navigate,
    userAnswer,
    setUserAnswer,
    isActive,
    setIsActive
  }
  const userNavProps = {
    setUser,
    user,
    navigate
  }

  const allPeoplePages = (
    <>
      <Route path='/signup' element={<SignUp {...userNavProps} />} />
      <Route path='/login' element={<Login {...userNavProps} />} />
      <Route path='/' element={<Home user={user} />} />
    </>
  )

  if (!user) {
    return (
      <div className="App">
        <Routes>
          {allPeoplePages}
        </Routes>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        {user && <NavBar user={user} />}
        <Routes>
          <Route path='/user' element={<UserPage {...userNavProps} />} />
          <Route path='/personality_quiz' element={<PersonalityQuiz {...quizProps} />} />
          <Route path='/quizzes/:id' element={<QuizPage {...quizProps} />} />
          <Route path='/quizzes' element={<QuizContainer quizzes={quizzes} />} />
          <Route path='/logout' element={<Logout {...userNavProps} />} />
          {allPeoplePages}
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;