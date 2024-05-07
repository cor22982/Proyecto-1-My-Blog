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
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate';


const Editar = ({click, postid}) => {
  const [editimage, setEditImage] = useState(false)
  const { token } = useToken()
  const [image, setImage] = useState('')

  const editimageonclik = () => {
    setEditImage(true)
  }

  const uploadimage = (name,value) => {
    if(name === 'images'){
      setImage(value)
    }
    
  }

  const {  llamadowithoutbody, llamadowithheaderwithoutbody, llamadowithheader } = useApi(`https://api.web05.lol/22982/posts/${postid}`);
  const [postunico , setpostunico] = useState({})
  const { navigate } = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await llamadowithoutbody('GET');
      setpostunico(data[0])
    };

    fetchData();
  }, [llamadowithoutbody]);

  const eliminar = async () => {
    const headers = [
      { title: 'authorization', value: token }
    ];
    const {success} = await llamadowithheaderwithoutbody(headers,'DELETE')
    if(success){
      navigate('/')
      window.history.pushState(null, '', `/admin/`);  
      alert('Eliminación exitosa');
    }else{
      alert('No se puede eliminar un error ha ocurrido');
    }
  }

  const editarOn = async (value,type) => {
    const body = {
      columna: type,
      valor: value,
    }
    const headers = [
      { title: 'authorization', value: token }
    ];
    const {success} = await llamadowithheader(headers,body,'PUT')
    console.log(success)
  }

  const upload = async () => {
    const body = {
      columna: "images",
      valor: image,
    }
    const headers = [
      { title: 'authorization', value: token }
    ];
    const {success} = await llamadowithheader(headers,body,'PUT')
    console.log(success)
    setEditImage(false)
  }

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
            <EditableText 
              text={postunico.few_description} 
              onSave={editarOn}
              type = "few_description"></EditableText>
          )}
          <h2 className='titulo2-contenido'>Historia</h2>
          {postunico.fecha && (
            <EditableText 
            text={postunico.history} 
            onSave={editarOn}
            type="history"></EditableText>
          )}
        </div>
        <div onClick={editimageonclik} className='clase-onclick'> 
          {editimage ? (
            <div>
              <DragyDrop
                size="300px"
                setval={uploadimage}
                name="images"></DragyDrop>
              <Boton nombre= "Actualizar" onClick={upload}></Boton>
            </div> 
          ) : (
            <img src={postunico.images} className='imagen-contenido'></img> 
          )
          }
        </div>
      </div>
      <h2 className='titulo2-contenido'>Eventos</h2>
      {postunico.fecha && (
            <EditableText 
              text={postunico.crucial_events} 
              onSave={editarOn}
              type="crucial_events"></EditableText>
      )}
      <h2 className='titulo2-contenido'>Curiosidades</h2>
      {postunico.fecha && (
          <EditableText 
            text={postunico.curiosities} 
            onSave={editarOn}
            type="curiosities"></EditableText>
      )}
      <h2 className='titulo2-contenido'>Titulo Alternativo</h2>
      {postunico.fecha && (
          <EditableText 
            text={postunico.alternativetext} 
            onSave={editarOn}
            type="alternativetext"></EditableText>
      )}
      <h2 className='titulo2-contenido'>Descripcion Alternativa</h2>
      {postunico.fecha && (
          <EditableText 
            text={postunico.alternativedescription} 
            onSave={editarOn}
            type="alternativedescription"></EditableText>
      )}
      
      
      <h2 className='titulo2-contenido'>Referencias</h2>
      {postunico.fecha && (
          <EditableText 
            text={postunico.text_references} 
            onSave={editarOn}
            type="text_references"></EditableText>
      )}
      <br></br>
      <br></br>
      <br></br>
      <Boton nombre= "ELIMINAR" onClick={eliminar}></Boton>
      <br></br>
      <br></br>
    </div>
  )
} 

Editar.propTypes = {
  click: PropTypes.func,
  postid: PropTypes.string,
}

export default Editar