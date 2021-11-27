import { Link } from 'react-router-dom';
import React from 'react';
import '../css/register.css';
import logo from '../img/pizza-planet-black.png';
import logoNeon from '../img/planeta-neon.png';
import iconUser from '../img/user.png';
import iconPassword from '../img/password.png';
import iconEmail from '../img/email.png';
import iconConfirmPassword from '../img/confirm-password.png';

const register = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-pizza" alt="logo"/>
        <img src={logoNeon} className="App-logo" alt="logo"/>
      </header>
      <div className="section-login">
        <div>
          <button className="buttons-begin">
            <Link to="/Login" className="button-login">
              Iniciar Sesion
            </Link>
          </button>
        </div>
        <div>
          <button className="buttons-begin">
            <Link to="/Register" className="button-register">
              Registrate
            </Link>
          </button>
        </div>

        <div className="input-name-user">
          <img src={iconUser} className="icon-user" alt="icon-user" />
          <input type="text" className="input-user" placeholder="Nombre Completo"/>
        </div>

        <div>
          <img src={iconEmail} className="icon-register-email" alt="icon-email" />
          <input type="text" className="input-register-email" placeholder="Correo Electronico"/>
        </div>

        <div className="">
          <img src={iconPassword} alt="icon-password" className="icon-register-password"/>
          <input type="password" className="input-register-password" id="" placeholder="Contraseña"/>
        </div>

        <div className="">
          <img src={iconConfirmPassword} className="icon-confirm-password" alt="icon-email" />
          <input type="text" className="input-confirm-password" placeholder="Confirmar Contraseña"/>
        </div>

        <div>
          <button className="btn-register-here">Registrate</button>
        </div>

      </div>
    </div>
  )
};

export default register;
