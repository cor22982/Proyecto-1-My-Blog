import './PantallaUsuario.css';
import MenuButton from '@components/MenuButton';
import {faHome, faSignIn} from '@fortawesome/free-solid-svg-icons';
import useNavigate from '@hooks/useNavigate'

const PantallaUsuario = () => {
  const { navigate } = useNavigate()

  const home = () => {
    navigate('/')
  }

  const iniciar = () => {
    navigate('/admin')
  }
  return (
    <div className="principal">
      <div className='menu'>
        <MenuButton nombre="Home" icono={faHome} onclick={home}></MenuButton>
        <MenuButton nombre="Iniciar Sesion" icono={faSignIn} onclick={iniciar}></MenuButton>
      </div>
      <div className='contenido'>

      </div>
    </div>
  );
  
}

export default PantallaUsuario