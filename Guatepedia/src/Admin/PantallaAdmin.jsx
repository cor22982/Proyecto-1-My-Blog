import './PantallaAdmin.css'
import MenuButton from '@components/MenuButton';
import {faHome, faPlus, faPen, faTrash, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import useNavigate from '@hooks/useNavigate'

const PantallaAdmin = () => {
  const { navigate } = useNavigate()

  const salir = () => {
    navigate('/')
  }

  return(
    <div className="principal">
      <div className='menu'>
      <h1 style={{color: 'white', marginLeft: '10px'}}>Administrador</h1>
        <MenuButton nombre="Home" icono={faHome}></MenuButton>
        <MenuButton nombre="Crear Post" icono={faPlus}></MenuButton>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <MenuButton 
          nombre="Salir" 
          icono={faRightFromBracket}
          onclick={salir}></MenuButton>
      </div>
      <div className='contenido'>

      </div>
    </div>
  )
}

export default PantallaAdmin