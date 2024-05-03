import Posts from './Posts';
import useNavigate from '@hooks/useNavigate';
import Descripcion from './Descripcion';
import { useState } from 'react';
const rutas = {
  '/': {
    component: Posts,
    setpostid : null,
  },
  '/descripcion':{
    component: Descripcion,
    onclick: () => {}
  }, 
};

const NavigationUsuario = () => {
  const [post, setPost] = useState(null)
  const { page, navigate } = useNavigate();
  const CurrentPage = rutas[page]?.component || Posts;
  let clickear 
  if(rutas[page].onclick){
    clickear = () => {
      navigate('/')
      window.history.pushState(null, '', '/');  
    }
    window.history.pushState(null, '', `/descripcion/${post}`); 
    return (
        
      <div>
        <CurrentPage click={clickear} postid={post.toString()}/>
      </div>
    );
  }

  return ( 
    <div>
      <CurrentPage setpostid={setPost}/>
    </div>
  );
};

export default NavigationUsuario;