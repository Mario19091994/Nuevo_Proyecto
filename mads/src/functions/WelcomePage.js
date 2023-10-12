import React from 'react';
import './WelcomePage.css'; // Importa los estilos
import BurgerMenu from './BurgerMenu'; // Importa el menú de hamburguesa

function WelcomePage() {
  return (
    <>
    <BurgerMenu />
    <div className="welcome-container">
      <h1>Bienvenido</h1>
      <p>¡Has iniciado sesión con éxito!</p>
    </div>
    </>
  );
}

export default WelcomePage;
