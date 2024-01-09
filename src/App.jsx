import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { React, useState } from 'react'

import Home from "./components/Home.jsx";
import Calendario from './components/Calendario.jsx';
import ToDo from './components/ToDo.jsx';
import Cancion from './components/Cancion.jsx';
import CelebrateComponent from './components/CelebrateComponent.jsx';


function App() {

  return (
    <>
   <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/timeline' element={<Calendario />} />
        <Route path='/todolist' element={<ToDo />} />
        <Route path='/cancion' element={<Cancion />} />
        <Route path='/celebrate' element={<CelebrateComponent />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
