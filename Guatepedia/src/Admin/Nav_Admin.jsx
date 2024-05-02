import MenuButton from '@components/MenuButton';
import { faHome, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Creacion from './Creacion';
import Inicio from './Inicio';
import useNavigate from '@hooks/useNavigate';
import Posts from '../UsuarioNormal/Posts';

const routes = {
  '/': {
    component: Posts, 
  },
  '/postear': {
    component: Creacion,
  },
};

const Nav_Admin = () => {
  const { page, navigate } = useNavigate();

  const CurrentPage = routes[page]?.component || (() => <h1>404</h1>);

  const nav_to = (item) => {
    navigate(item);
  };

  const exit = () => {
    window.location.reload();
  }

  return (
    <div className="principal">
      <div className="menu">
        <h1 style={{ color: 'white', marginLeft: '10px' }}>Administrador</h1>
        <MenuButton
          nombre="Home"
          icono={faHome}
          onclick={() => nav_to('/')}
        />
        <MenuButton
          nombre="Crear Post"
          icono={faPlus}
          onclick={() => nav_to('/postear')}
        />
        <br />
        <br />
        <br />
        <br />
        <MenuButton
          nombre="Salir"
          icono={faRightFromBracket}
          onclick={exit}
        />
      </div>
      <div className="contenido">
        <CurrentPage />
      </div>
    </div>
  );
};

export default Nav_Admin;
