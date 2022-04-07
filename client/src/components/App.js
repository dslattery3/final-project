import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from "react-router-dom"
import NavBar from "./NavBar";
import UserPage from './UserPage.js'
import Home from './Home.js'
import SignUp  from "./SignUp"
import Login from './Login.js'
import Logout from './Logout.js'
import '../App.css';
import QuizContainer from "./QuizContainer";

function App() {
  const [characters, setCharacters] = useState([])
  const [height, setHeight] = useState(0)
  const [user, setUser] = useState(null)

  useEffect(()=> {
    fetch('/me')
      .then(r => {
        if (r.ok){
          r.json().then((data) => setUser(data))
        }
      })
  },[])

  useEffect(()=> {
    fetch('https://akabab.github.io/starwars-api/api/all.json')
    .then(r=>r.json())
    .then(data => {
      const people = data.map( o => {
        return {
          name: o.name,
          species: o.species,
          gender: o.gender,
          height: o.height,
          affiliations: o.affiliations,
          home: o.homeworld, 
          image: o.image
        }
      })
      setCharacters(people)
      setHeight(avgHeight(people))
    })}, [])

  const avgHeight  = (arr) => {
    let initialSum = 0
    let heightArr = arr.map( o => o.height).filter(h => h !== undefined)
    const sum = heightArr.reduce((pV, cV) => pV + cV, initialSum)
    return (sum/heightArr.length)
  }

  const navigate = useNavigate()

  console.log('avgHeight', height)
  console.log('characters', characters)

  return (
    <div className="App">
      <NavBar user={user}/>
      <Routes>
        <Route path='/user' element={<UserPage user={user} />} />
        <Route path='/quizzes' element={<QuizContainer />} />
        <Route path='/signup' element={<SignUp setUser={setUser} navigate={navigate}/>} />
        <Route path='/login' element={<Login setUser={setUser} navigate={navigate}/>} />
        <Route path='/logout' element={<Logout setUser={setUser} navigate={navigate}/>} />
        <Route path='/' element={<Home user={user} />} />
      </Routes>
    </div>
  );
}

export default App;