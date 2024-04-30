import './PantallaUsuario.css';
import MenuButton from '@components/MenuButton';
import {faHome, faSignIn} from '@fortawesome/free-solid-svg-icons';
import useNavigate from '@hooks/useNavigate'
import Tarjeta from '@components/Tarjeta';
import useApi from '@hooks/useApi';
import { useEffect,useState } from 'react';

const PantallaUsuario = () => {
  const { navigate } = useNavigate()
  const { error, llamadowithoutbody } = useApi('http://api.web05.lol/22982/posts');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await llamadowithoutbody('GET');
      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        // Manejar el caso en el que data no sea un array
        console.error('La respuesta no es un array:', data);
      }
    };

    fetchData();
  }, []);


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
        {posts.map((post) => (
          <Tarjeta
            key={post.id}
            titulo={post.pearson}
            descripcion={post.few_description}
            fecha={post.fecha_post}
            imageurl={post.images}></Tarjeta>
            
        ))}

      </div>
    </div>
  );
  
}

export default PantallaUsuario