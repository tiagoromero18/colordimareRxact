import React from 'react';
import './LoginPage.css';
import logo from './Montserrat-2.png';

const LoginPage = () => {
  
    return (
      <div className="login-container">
        <div className="logo2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <form action="./home">
            <h4>Usuario</h4>
            <input type="text" id="username" name="username" placeholder="Ingresa tu usuario" />
            <h4>Contraseña</h4>
            <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" />
            <a className="login-form-a" href="./olvideMiContrasena" target="_self">Olvide mi contraseña</a>
            <button type="submit">INGRESA</button>
          </form>
          <a className="login-form-a2" href="./register" target="_self">¿No estás registrado? Regístrate</a>
        </div>
      </div>
    );
  };
  
export default LoginPage;
