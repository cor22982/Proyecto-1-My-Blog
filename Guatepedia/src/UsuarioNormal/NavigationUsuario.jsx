import Posts from './Posts';
import useNavigate from '@hooks/useNavigate';
import Descripcion from './Descripcion';
const rutas = {
  '/': {
    component: Posts
  },
  '/descripcion':{
    component: Descripcion,
    onclick: () => {}
  },
};

const NavigationUsuario = () => {
  const { page, navigate } = useNavigate();
  const CurrentPage = rutas[page]?.component || Posts;
  let clickear 
  if(rutas[page].onclick){
    clickear = () => {
      navigate('/') 
    }
  }

  return ( 
    <div>
      <CurrentPage click={clickear}/>
    </div>
  );
};

export default NavigationUsuario;