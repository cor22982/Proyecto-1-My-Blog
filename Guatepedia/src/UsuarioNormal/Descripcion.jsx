import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Descripcion.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useApi from '@hooks/useApi';

const Descripcion = ({click, postid}) => {
  const {  llamadowithoutbody } = useApi(`https://api.web05.lol/22982/posts/${postid}`);
  const [postunico , setpostunico] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const data = await llamadowithoutbody('GET');
      setpostunico(data[0])
    };

    fetchData();
  }, [llamadowithoutbody]);
  return (
    <div>
      <div className='tituloboton'>
        <button className='button-back' onClick={click}>
          <FontAwesomeIcon icon={faArrowLeft} className="icon-back" />
        </button>
        {postunico.fecha && (
          <h1 className='titulo-back'>Post {postunico.id} . Fecha: {postunico.fecha.substring(0,10)}</h1>
        )}
      </div>
      <div className='contenido'>
        
        <div className='contenido-imagen'>
          <h1 className='titulo-contenido'>{postunico.pearson}</h1>
          <h2 className='titulo2-contenido'>Descripcion</h2>
          <p className='contenido-contenido'>{postunico.few_description}</p> 
          <h2 className='titulo2-contenido'>Historia</h2>
          <p className='contenido-contenido'>{postunico.history}</p> 
        </div>
        <img src={postunico.images} className='imagen-contenido'></img> 
      </div>
      
          <h2 className='titulo2-contenido'>Eventos</h2>
          {postunico.crucial_events && postunico.crucial_events.split('\n').map((line, index) => (
            <p key={index} className='contenido-contenido'>{line}</p>
          ))} 
          <h2 className='titulo2-contenido'>Curiosidades</h2>
          {postunico.curiosities && postunico.curiosities.split('\n').map((line, index) => (
            <p key={index} className='contenido-contenido'>{line}</p>
          ))} 
          <h2 className='titulo2-contenido'>{postunico.alternativetext}</h2>
          {postunico.alternativedescription && postunico.alternativedescription.split('\n').map((line, index) => (
            <p key={index} className='contenido-contenido'>{line}</p>
          ))} 
          <h2 className='titulo2-contenido'>Referencias</h2>
          <a href={postunico.text_references}>Link de referencia</a>
    </div>
    
  )
}

Descripcion.propTypes = {
  click: PropTypes.func,
  postid: PropTypes.string,
}

export default Descripcion