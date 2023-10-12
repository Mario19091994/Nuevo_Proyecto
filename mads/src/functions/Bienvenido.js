import React from 'react';
import './css/WelcomePage.css'; // Importa los estilos
import logo from './css/images/cod.jpg'
import WelcomeButton from './WelcomeButton';
import RicardoMilos from './RicardoMilos';
function Bienvenido() {
  return (
  
    <div className="welcome-container">
      <h1>Bienvenido a casa soldado</h1>
      <img src={logo} alt="Logo" />
      <p>¡Has iniciado sesión con éxito!</p>
      <WelcomeButton />
      <hr></hr>
      <RicardoMilos/>
    </div>
  );
}

export default Bienvenido;
