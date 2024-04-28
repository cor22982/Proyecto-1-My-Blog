import './PantallaUsuario.css';
import MenuButton from '@components/MenuButton';
import {faHome, faSignIn} from '@fortawesome/free-solid-svg-icons';

const PantallaUsuario = () => {
  return (
    <div className="principal">
      <div className='menu'>
        <MenuButton nombre="Home" icono={faHome}></MenuButton>
        <MenuButton nombre="Iniciar Sesion" icono={faSignIn}></MenuButton>
      </div>
      <div className='contenido'>

      </div>
    </div>
  );
  
}

export default PantallaUsuario