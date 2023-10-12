import React, { useState } from 'react';
import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    // Aquí puedes simular la lógica de autenticación (por ejemplo, comparando credenciales ficticias).
    // Para fines de este ejemplo, asumiremos que las credenciales válidas son 'correo@example.com' y 'contraseña'.

    if (email === 'correo@example.com' && password === 'contraseña') {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  };

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
        <hr></hr>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </form>
      {loginSuccess && <p>¡Inicio de sesión exitoso!</p>}
      {loginSuccess === false && <p>Inicio de sesión fallido. Verifique su correo electrónico y contraseña.</p>}
    </div>
    </div>
  );
}

export default Login;