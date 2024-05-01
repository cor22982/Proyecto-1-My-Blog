import MenuButton from '@components/MenuButton';
import {faHome, faPlus, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import Creacion from './Creacion';
import Inicio from './Inicio';
import useNavigate from '@hooks/useNavigate'

const routes = {
  '/': {
    component: Inicio,
  },
  '/postear': {
    component: Creacion,
  },
  
}

const Nav_Admin = () => {
  const { page, navigate } = useNavigate()
  let CurrentPage = () => <h1>404</h1>
  CurrentPage = routes[page].component
  
  return (
    <div className="principal">
      <div className='menu'>
      <h1 style={{color: 'white', marginLeft: '10px'}}>Administrador</h1>
        <MenuButton nombre="Home" icono={faHome}></MenuButton>
        <MenuButton nombre="Crear Post" icono={faPlus}></MenuButton>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <MenuButton 
          nombre="Salir" 
          icono={faRightFromBracket}
          ></MenuButton>
      </div>
      <div className='contenido'>
        <CurrentPage />
      </div>
    </div>
  ) 
}


export default Nav_Admin