import React, { useState,Components } from 'react';
import './css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import WelcomePage from './WelcomePage'; // Importa la página de bienvenida
import Swal from 'sweetalert2'; // Importa SweetAlert

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToWelcome, setRedirectToWelcome] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    if (email.trim() !== '' && password.trim() !== '') {
      setRedirectToWelcome(true);
    } else {
      // Muestra una alerta SweetAlert en caso de campos vacíos
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, llene todos los campos',
      });
    }
  };

  if (redirectToWelcome) {
    return <WelcomePage />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
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
          <Button variant="primary" type="submit">Iniciar Sesión</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
