import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import NavBar from "./NavBar";
import UserPage from './UserPage.js'
import Home from './Home.js'
import SignUp  from "./SignUp"
import Login from './Login.js'
import '../App.css';
import QuizContainer from "./QuizContainer";

function App() {
  const [characters, setCharacters] = useState([])
  const [height, setHeight] = useState(0)
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

  return (
    <div className="App">
      <NavBar />
      <button onClick={()=> setHeight(avgHeight(characters))}>Click Me</button>
      <Routes>
        <Route path='/user' element={<UserPage />} />
        <Route path='/quizzes' element={<QuizContainer />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>


    </div>
  );
}

export default App;