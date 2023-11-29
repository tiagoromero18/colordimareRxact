import React from 'react';
import './cambioContrasena.css';
import logo from './Montserrat-2.png';

const cambioContrasena = () => {
  
    return (
      <div className="login-container">
        <div className="logo2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <form action="./login">
            <h4>Nueva contraseña</h4>
            <input type="password" id="password"/>
            <h4>Confirme su nueva contraseña</h4>
            <input type="password" id="passwordConfirmación"/>
            <button type="submit">ENVIA</button>
          </form>
        </div>
      </div>
    );
  };
  
export default cambioContrasena;