// CelebrateComponent.js

import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../styles/CelebrateComponent.css';
import { useNavigate } from 'react-router-dom';

const CelebrateComponent = () => {
  const navigate = useNavigate();
  const handleYesClick = () => {
    navigate('/timeline')
  };

  const handleNoClick = () => {
  
    Swal.fire({
      icon: 'error',
      title: 'Opción Incorrecta',
      text: 'Has marcado la opción incorrecta.',
      confirmButtonColor: '#3498db',
      cancelButtonColor: '#3498db',
    });
  };

  return (
    <div className="celebrate-container">
      <div className="celebrate-box">
        <h2>¿Quieres seguir celebrando los 10 de cada mes conmigo?</h2>
        <div className="button-container">
          <button onClick={handleYesClick}>Sí</button>
          <button onClick={handleNoClick}>No</button>
        </div>
      </div>
    </div>
  );
};

export default CelebrateComponent;
