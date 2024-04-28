import './PantallaAdmin.css'
import MenuButton from '@components/MenuButton';
import {faHome, faPlus, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

const PantallaAdmin = () => {
  return(
    <div className="principal">
      <div className='menu'>
      <h1 style={{color: 'white', marginLeft: '10px'}}>Administrador</h1>
        <MenuButton nombre="Home" icono={faHome}></MenuButton>
        <MenuButton nombre="Crear Post" icono={faPlus}></MenuButton>
        <MenuButton nombre="Editar Post" icono={faPen}></MenuButton>
        <MenuButton nombre="Eliminar Post" icono={faTrash}></MenuButton>
      </div>
      <div className='contenido'>

      </div>
    </div>
  )
}

export default PantallaAdmin