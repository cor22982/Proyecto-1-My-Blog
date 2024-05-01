import './TextInputPost.css'
import PropTypes from 'prop-types';
const TextInputPost = ({onChange,value, placeholder, altura}) => {
  return (
    <div className='contenedor-1'>
      <textarea
        onChange={({ target: { value }}) => onChange(value)}
        placeholder={placeholder}
        value={value}
        className='input-text'
        style={{height: altura}}  
      />
    </div>
  ) 
}

TextInputPost.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  titulo: PropTypes.string,
  placeholder: PropTypes.string,
  altura: PropTypes.string,
}
export default TextInputPost