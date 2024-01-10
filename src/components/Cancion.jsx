// Cancion.jsx
import React from 'react';
import '../styles/Cancion.css';
import { NavbarComponent} from './NavbarComponent'

const Cancion = () => {
  return (
    <div className='cancion-principal'>
      <NavbarComponent />
    <div className="cancion-container">
      <div className="column-container">
        <h3 className='texto-cancion'>Aquí dejaré una canción para ti todos los 10 de cada mes.</h3>
      </div>
      <div className="column-container">
        {/* Reproductor de canciones con un enlace de ejemplo */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AjGkbFqi67c?si=n8jPRuIUeKSIqQ73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
    </div>
  );
};

export default Cancion;

