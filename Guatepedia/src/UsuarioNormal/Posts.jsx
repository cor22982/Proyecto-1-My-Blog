import Tarjeta from '@components/Tarjeta';
import useApi from '@hooks/useApi';
import { useEffect,useState } from 'react';
import useNavigate from '@hooks/useNavigate';
import PropTypes from 'prop-types';

const Posts = ({setpostid}) => {
  const { navigate } = useNavigate()
  const gotodescribe = (item) => {
    setpostid(item)
    navigate('/descripcion')
    
  }
  const {  llamadowithoutbody } = useApi('https://api.web05.lol/22982/posts');
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
  }, [llamadowithoutbody]);

  return(
    <div>
      {posts.map((post) => (
          <Tarjeta
            key={post.id}
            titulo={post.pearson}
            descripcion={post.few_description}
            fecha={post.fecha_post.substring(0, post.fecha_post.indexOf("T"))}
            imageurl={post.images}
            onclick={() => gotodescribe(post.id)}></Tarjeta>
            
        ))}
    </div>
  );
}

Posts.propTypes = {
  setpostid: PropTypes.func,
}
export default Posts