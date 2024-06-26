import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './TextInput.css'
const TextInput = ({icono,  type,onChange,value, titulo}) => {
  return (
    <div className='contenedor'>
      <div className='titulo'>{titulo}</div>
      <input 
        type={type} 
        onChange={({ target: { value }}) => onChange(value)}
        value={value}  
        />
      <FontAwesomeIcon icon={icono} className="icon" />
    </div>
  )  
}

TextInput.propTypes = {
  icono: PropTypes.object,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  titulo: PropTypes.string,
}
export default TextInput