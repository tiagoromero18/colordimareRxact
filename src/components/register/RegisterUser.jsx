import React from 'react';
import './RegisterUser.css';
import logo from './Montserrat-2.png';

const RegisterUser = () => {
  
    return (
      <div className="login-container2">
        <div className="logo2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <form action="./login">
            <h4>Nombre completo</h4>
            <input type="text" id="username" name="nombre" />
            <h4>E-mail</h4>
            <input type="mail" id="username" name="mail" />
            <h4>Contraseña</h4>
            <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" />
            <h4>Confirma tu contraseña</h4>
            <input type="password" id="password" name="passwordToo" placeholder="Ingresa tu contraseña" />
            <button type="submit">Enviar</button>
          </form>
          <a className="login-form-a2" href="./login" target="_self">¿Ya tienes cuenta? Ingresa</a>
        </div>
      </div>
    );
  };
  
export default RegisterUser;
