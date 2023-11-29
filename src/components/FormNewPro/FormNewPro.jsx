import React from 'react';
import './FormNewPro.css';
import logo from './Montserrat-2.png';


const FormNewPro = () => {
  
    return (
      <div className="login-container2">
        <div className="logo2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login-form">
          <form action="./productos">
            <h4>Nombre del producto</h4>
            <input type="text" id="username" name="nombre" />
            <h4>Descripción</h4>
            <input type="text" id="username" name="mail" />
            <h4> # de prendas disponibles</h4>
            <input type="number" id="password" name="password" />
            <h4> Precio </h4>
            <input type="number" id="password" name="password" />
            <h4> Categorias</h4>
            <input type="text" id="password" name="password" />
            <h4> Imagen del producto </h4>
            <input type="file" id="password" name="foto"></input>
            <h4>Tallas disponibles</h4>
            <div className="Tallas">
            <div id="one">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  XS
                </label>
              </div>
            </div>
            <div id="two">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked cus" checked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  S
                </label>
              </div>
            </div>
            <div id="three">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  M
                </label>
              </div>
            </div>
            <div id="four">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  L
                </label>
              </div>
            </div>
            <div id="five">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  XL
                </label>
              </div>
            </div>
          </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  };
  
export default FormNewPro;

