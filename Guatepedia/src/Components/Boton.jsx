import './Boton.css'
import PropTypes from 'prop-types';
const Boton = ({onClick, nombre}) => {
  return (
    <button onClick={onClick} className='boton-boton'>{nombre}</button>
  )
}

Boton.propTypes = {
  onClick: PropTypes.func,
  nombre: PropTypes.string,
}

export default Boton