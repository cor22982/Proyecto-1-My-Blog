import './Login.css'
import TextInput from '@components/TextInput'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import Boton from '@components/Boton';
const Login = () => {
  return (
    <div className='contenedor-login'>
      <div className="texto-titulo">Iniciar Sesion</div>
      <br></br>
      <div className='contenedor-labels'>
        <TextInput 
          icono={faUser} 
          type= "text"
          titulo= "Usuario administrador"
          ></TextInput>
        <TextInput 
          icono={faLock} 
          type= "password"
          titulo= "Contraseña administrador"
          ></TextInput>
        <Boton nombre="Iniciar Sesion"></Boton>
      </div>
    </div>
  )
}

export default Login 