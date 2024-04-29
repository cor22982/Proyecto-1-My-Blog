import './Tarjeta.css'
import PropTypes from 'prop-types';

const Tarjeta = ({imageurl, titulo, fecha, descripcion}) => {

  return (
    <div>
      <div className='linea'></div>
      <div className="tarjeta">
        <img className='imagen' src={imageurl}></img>
        <div className='contenido-tarjeta'>
          <h1>{titulo}</h1>
          <p>{fecha}</p>
          <p>{descripcion}</p>
          
        </div>
      </div>
    </div>
  ); 
}

Tarjeta.propTypes = {
  imageurl: PropTypes.string,
  titulo: PropTypes.string,
  fecha: PropTypes.string,
  descripcion: PropTypes.string,
}

export default Tarjeta