import './MenuButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const MenuButton = ({nombre, onclick, icono}) => {
  return(
    <div className='contenedor-menu'>
     <FontAwesomeIcon icon={icono} className="icon" />
     <button onClick={onclick} className='boton'>{nombre}</button>
    </div>
    
  );
}

MenuButton.propTypes = {
  nombre: PropTypes.string,
  onclick: PropTypes.func,
  icono: PropTypes.object, 
}
export default MenuButton