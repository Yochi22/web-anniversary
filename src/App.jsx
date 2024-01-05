import{ Routes, Route } from 'react-router-dom'
import { React, useState } from 'react'

import Home from "./components/Home.jsx";
import Calendario from './components/Calendario.jsx';
import ToDo from './components/ToDo.jsx';
import Cancion from './components/Cancion.jsx';
import CelebrateComponent from './components/CelebrateComponent.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/calendario' element={<Calendario/>}/>
    <Route path='/todolist' element={<ToDo />}/>
    <Route path='/cancion' element={<Cancion />}/>
    <Route path='/celebrate' element={<CelebrateComponent />}/>
  </Routes>
    </>
  )
}

export default App
