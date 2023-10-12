import React, { useState } from 'react';
import './Login.css';
import WelcomePage from './WelcomePage'; // Importa la página de bienvenida

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToWelcome, setRedirectToWelcome] = useState(false);

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setRedirectToWelcome(true); // Activa la redirección si ambos campos no están vacíos
    }
  };

  if (redirectToWelcome) {
    return <WelcomePage />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar sesión</h1>
        <form>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="text"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <hr />
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

