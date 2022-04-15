import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { getQuizzes, getItems } from "../tools/api"
import NavBar from "./NavBar"
import UserPage from './UserPage.js'
import Home from './Home.js'
import SignUp from "./SignUp"
import Login from './Login.js'
import Logout from './Logout.js'
import QuizContainer from "./QuizContainer"
import QuizPage from "./QuizPage"
import PersonalityQuiz from "./PersonalityQuiz"
import StorePage from './StorePage'
import StoreContainer from "./StoreContainer"
import Footer from "./Footer"

function App() {
  const [user, setUser] = useState(null)
  const [quizzes, setQuizzes] = useState(null)
  const [stickerItems, setStickerItems] = useState(null)
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

  useEffect(() => {
    getItems().then(setStickerItems)
  }, [])


  let storeStickers = stickerItems && [...stickerItems].filter((o) => o.from_store === true)
  let categories = storeStickers && Array.from(new Set(storeStickers.map(o => o.category)))

  console.log(categories)

  const storeProps = {
    storeStickers,
    categories,
    user,
    setUser
  }


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
          <Route path='/store/:catName' element={<StorePage {...storeProps} />} />
          <Route path="/store" element={<StoreContainer {...storeProps} />} />
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