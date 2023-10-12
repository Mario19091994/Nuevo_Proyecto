import React, { useState } from 'react';
import './BurgerMenu.css';

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
          <li className="list-group-item">Inicio</li>
          <li className="list-group-item">Perfil</li>
          <li className="list-group-item">Configuraciones</li>
          {/* Agrega más elementos de menú aquí */}
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
