import PropTypes from 'prop-types';
import '../UsuarioNormal/Descripcion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import useApi from '@hooks/useApi';
import EditableText from '@components/EditableText';
import './Editar.css'
import DragyDrop from '@components/DragyDrop';
import Boton from '../Components/Boton';

const Editar = ({click, postid}) => {
  const [editimage, setEditImage] = useState(false)
  const save = () => {
    console.log('guardado')
  }

  const editimageonclik = () => {
    setEditImage(true)
  }

  const {  llamadowithoutbody } = useApi(`http://api.web05.lol/22982/posts/${postid}`);
  const [postunico , setpostunico] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const data = await llamadowithoutbody('GET');
      setpostunico(data[0])
    };

    fetchData();
  }, [llamadowithoutbody]);
  return( 
    <div>
      <div className='tituloboton'>
        <button className='button-back' onClick={click}>
          <FontAwesomeIcon icon={faArrowLeft} className="icon-back" />
        </button>
        {postunico.fecha && (
          <h1 className='titulo-back'>Editar Post {postunico.id} . Fecha: {postunico.fecha.substring(0,10)}</h1>
        )}
      </div>
      <div className='contenido'>
        <div className='contenido-imagen'>
          <h1 className='titulo-contenido'>{postunico.pearson}</h1>
          <h2 className='titulo2-contenido'>Descripcion</h2>
          {postunico.fecha && (
            <EditableText text={postunico.few_description} onSave={save}></EditableText>
          )}
          <h2 className='titulo2-contenido'>Historia</h2>
          {postunico.fecha && (
            <EditableText text={postunico.history} onSave={save}></EditableText>
          )}
        </div>
        <div onClick={editimageonclik} className='clase-onclick'> 
          {editimage ? (
            <DragyDrop
            size="300px"></DragyDrop>
          ) : (
            <img src={postunico.images} className='imagen-contenido'></img> 
          )
          }
        </div>
      </div>
      <h2 className='titulo2-contenido'>Eventos</h2>
      {postunico.fecha && (
            <EditableText text={postunico.crucial_events} onSave={save}></EditableText>
      )}
      <h2 className='titulo2-contenido'>Curiosidades</h2>
      {postunico.fecha && (
          <EditableText text={postunico.curiosities} onSave={save}></EditableText>
      )}
      <h2 className='titulo2-contenido'>Titulo Alternativo</h2>
      {postunico.fecha && (
          <EditableText text={postunico.alternativetext} onSave={save}></EditableText>
      )}
      <h2 className='titulo2-contenido'>Descripcion Alternativa</h2>
      {postunico.fecha && (
          <EditableText text={postunico.alternativedescription} onSave={save}></EditableText>
      )}
      
      
      <h2 className='titulo2-contenido'>Referencias</h2>
      {postunico.fecha && (
          <EditableText text={postunico.text_references} onSave={save}></EditableText>
      )}
      <br></br>
      <br></br>
      <br></br>
      <Boton nombre= "ELIMINAR"></Boton>
    </div>
  )
} 

Editar.propTypes = {
  click: PropTypes.func,
  postid: PropTypes.string,
}

export default Editar