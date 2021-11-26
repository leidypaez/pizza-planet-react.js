import '../index.css';
import logo from '../img/pizza-planet-black.png';
import logoNeon from '../img/planeta-neon.png';
import iconEmail from '../img/user.png';
import iconPassword from '../img/password.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-pizza" alt="logo"/>
        <img src={logoNeon} className="App-logo" alt="logo"/>
      </header>
      <div className="section-login">
        <div>
          <button className="button-login">Iniciar Sesion</button>
        </div>
        <div>
          <button className="button-register">Registrate</button>
        </div>
        <div className="input-login">
          <img src={iconEmail} className="icon-email" alt="icon-email" />
          <input type="text" className="input-email" placeholder="Correo Electronico"/>
        </div>
        <div className="input-register">
          <img src={iconPassword} alt="icon-password" className="icon-password"/>
          <input type="password" className="input-password" id="" placeholder="Contraseña"/>
        </div>
        <div>
          <button className="btn-login">Iniciar Sesion</button>
        </div>
      </div>
    </div>
  );
}

export default App;
