import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'


export default function Home() {
  return (
    <div className="home-container">
    <div className="background"></div>
    <div className="content">
      <h1>Xodó</h1>
      <p>Es una forma de decir "mi amor" a la persona que más quieres en la vida.</p>
      <Link to="/celebrate">
        <button>Empezar</button>
      </Link>
    </div>
  </div>
);
};
  
