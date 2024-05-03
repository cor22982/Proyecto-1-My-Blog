import MenuButton from '@components/MenuButton';
import { faHome, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Creacion from './Creacion';
import useNavigate from '@hooks/useNavigate';
import Posts from '../UsuarioNormal/Posts';
import Editar from './Editar';
import { useState } from 'react';

const routes = {
  '/': {
    component: Posts, 
  },
  '/postear': {
    component: Creacion,
  },
  '/descripcion': {
    component: Editar,
    onclick: () => {}
  }, 

};

const Nav_Admin = () => {
  const [post, setPost] = useState(null)
  const { page, navigate } = useNavigate();
  const CurrentPage = routes[page]?.component || (() => <h1>404</h1>);

  const nav_to = (item) => {
    navigate(item);
  };

  const exit = () => {
    window.location.reload();
  }

  const clickear = () => {
    navigate('/') 
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
        {(routes[page].onclick) ? (
          <CurrentPage click={clickear} postid={post.toString()}/>
        ) : (
          <CurrentPage setpostid={setPost}/>
        )
        }
      </div>
    </div>
  );
};

export default Nav_Admin;
