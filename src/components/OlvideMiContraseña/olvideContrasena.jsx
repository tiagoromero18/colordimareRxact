import React from 'react';
import './olvideContrasena.css';
import logo from './Montserrat-2.png';

const olvideContrasena = () => {
  
    return (
      <div className="login-container">
        <div className="logo2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <form action="./cambioDeContrasena">
            <h4>Usuario</h4>
            <input type="text" id="username" name="username" placeholder="Ingresa tu usuario" />
            <h4>Email</h4>
            <input type="mail" id="mail" name="mail" />
            <h4>Nombre</h4>
            <input type="text" id="nombre" name="nombre" />
            <button type="submit">ENVIA</button>
          </form>
        </div>
      </div>
    );
  };
  
export default olvideContrasena;