import React, { useState } from 'react';
import './css/BurgerMenu.css';
import LogoutButton from './LogoutButton'; // Importa el botón de cierre de sesión

function BurgerMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="burger-menu">
      <button
        className="btn btn-primary btn-lg menu-icon"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <div className={`menu ${menuVisible ? 'visible' : ''}`}>
        <ul className="list-group">
          <li className="list-group-item">Inicio (en contrucción)</li>
          <li className="list-group-item">Perfil (en contrucción)</li>
          <li className="list-group-item">Configuraciones(en contrucción)</li>
          <li className="list-group-item">
            <LogoutButton/> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
