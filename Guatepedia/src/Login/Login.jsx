import './Login.css'
import { object, string } from 'yup'
import TextInput from '@components/TextInput'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import Boton from '@components/Boton';
import { md5 } from 'js-md5'
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import useForm from '@hooks/useForm'
import useApi from '@hooks/useApi';


const schema = object({
  username: string().required(),
  password: string().required()
})

const Login = () => {
  const { navigate } = useNavigate()
  const { setToken } = useToken() 
  const { values, setValue, validate, errors } = useForm(schema)
  const { error, llamado } = useApi('http://api.web05.lol/22982/login');



  const loguearse = async () => {
    const formData = Object.keys(values).reduce((acc, key) => {
      acc[key] = key === 'password' ? md5(values[key]) : values[key];
      return acc;
    }, {});
    const {acces_token} = await llamado (formData, 'POST')
    setToken(acces_token)
    navigate('/admin')
  }

  return (
    <div className='contenedor-login'>
      <div className="texto-titulo">Iniciar Sesion</div>
      <br></br>
      <div className='contenedor-labels'>
        <TextInput 
          icono={faUser} 
          type= "text"
          titulo= "Usuario administrador"
          value={values.username} 
          onChange={(value) => {setValue('username', value)}}
          ></TextInput>
        <TextInput 
          icono={faLock} 
          type= "password"
          titulo= "Contraseña administrador"
          value={values.password}
          onChange={(value) => {setValue('password', value)}}
          ></TextInput>
        <Boton nombre="Iniciar Sesion" onClick={loguearse}></Boton>
      </div>
    </div>
  )
}

export default Login 