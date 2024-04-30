import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Descripcion.css'
import PropTypes from 'prop-types';

const Descripcion = ({click}) => {
  return (
    <div>
      <div className='tituloboton'>
        <button className='button-back' onClick={click}>
          <FontAwesomeIcon icon={faArrowLeft} className="icon-back" />
        </button>
        <h1 className='titulo-back'>Post 115 . Fecha: 15-05-2024</h1>
      </div>
      <div className='contenido'>
        
        <div className='contenido-imagen'>
          <h1 className='titulo-contenido'>Jexs</h1>
          <h2 className='titulo2-contenido'>Descripcion</h2>
          <p className='contenido-contenido'>Jeremy Roberto mejor conocido como Jexs es un YouTuber guatemalteco que sube videos de comedia, bromas, retos, gameplays, entre otros.</p> 
          <h2 className='titulo2-contenido'>Historia</h2>
          <p className='contenido-contenido'>Lanzó su canal de YouTube en noviembre del 2015 con un video titulado Cómo ganar dinero y premios en android.</p> 
        </div>
        <img src='https://i.pinimg.com/200x150/ae/71/17/ae7117fc3c1da6ec16843d9ca0138b66.jpg' className='imagen-contenido'></img>
        
      </div>
      <h2 className='titulo2-contenido'>Eventos</h2>
          <p className='contenido-contenido'>Publicó un video titulado Max Valenzuela y los Musical.lys - Crítica en su canal Jexs.</p> 
          <h2 className='titulo2-contenido'>Curiosidades</h2>
          <p className='contenido-contenido'>Tiene otro canal de YouTube llamado AccionAndroid con más de 1 millón de suscriptores. También es popular en TikTok donde tiene más de 4 millones de fans en su cuenta jexsoficial por sus videos de comedia. Uno de sus comentarios más populares sobre La Rosa de Guadalupe ha obtenido más de 10 millones de visitas.</p> 
          <h2 className='titulo2-contenido'>Contenido</h2>
          <p className='contenido-contenido'>Su canal se basa en Reacciones, Comedia, bromas y retos, además de gameplays ya sea de juegos de carreras, multijugador, shooter y algunos randoms.</p> 
    </div>
    
  )
}

Descripcion.propTypes = {
  click: PropTypes.func,
}

export default Descripcion