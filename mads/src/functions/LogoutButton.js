import React from 'react';

function LogoutButton() {
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>Cerrar Sesión</button>
  );
}

export default LogoutButton;
