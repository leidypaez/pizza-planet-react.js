import { Link } from 'react-router-dom';
import '../css/home.css';
import Logo from '../img/Logo.png';
import chef from '../img/traje-de-chef.png';
import camarero from '../img/camareros.png';

const home = () => {
  return (
      <header className="App-header">
        <div className="App">
          <img src={Logo} className="App-logo-login" alt="logo-pizza-planet" />
          <div>
            <button className="waiterButton">
              <Link to="/Waiter" className="link-color">
                <img src={camarero} alt="icono-camarero" className="icon"/>
                Mesero
              </Link>
            </button>
            <button className="chefButton">
              <Link to="/Chef" className="link-color">
                <img src={chef} alt="icono-chef" className="icon"/>
                Cocina
              </Link>
            </button>
          </div>
        </div>
      </header>
  )
}

export default home;
