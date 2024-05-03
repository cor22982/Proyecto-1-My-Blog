import './PantallaUsuario.css';
import MenuButton from '@components/MenuButton';
import {faHome, faSignIn} from '@fortawesome/free-solid-svg-icons';
import useNavigate from '@hooks/useNavigate'
import NavigationUsuario from './NavigationUsuario';
import { NavigationProvider } from '@hooks/useNavigate'

const PantallaUsuario = () => {
  const { navigate } = useNavigate()
  const home = () => {
    navigate('/')
    window.history.pushState(null, '', '/');
    
  }

  const iniciar = () => {
    navigate('/admin')
    window.history.pushState(null, '', '/admin');
  }
  return (
    <div className="principal">
      <div className='menu'>
        <MenuButton nombre="Home" icono={faHome} onclick={home}></MenuButton>
        <MenuButton nombre="Iniciar Sesion" icono={faSignIn} onclick={iniciar}></MenuButton>
      </div>
      <div className='contenido'>
      <NavigationProvider>
        <NavigationUsuario></NavigationUsuario>
      </NavigationProvider>  
      </div>
    </div>
  );
  
}

export default PantallaUsuario