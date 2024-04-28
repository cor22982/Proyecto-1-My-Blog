import './Boton.css'
import PropTypes from 'prop-types';
const Boton = ({onClick, nombre}) => {
  return (
    <button onClick={onClick}>{nombre}</button>
  )
}

Boton.propTypes = {
  onClick: PropTypes.func,
  nombre: PropTypes.string,
}

export default Boton