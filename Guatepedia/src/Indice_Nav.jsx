import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'

import Login from './Login/Login'
import PantallaAdmin from './Admin/PantallaAdmin'
import PantallaUsuario from './UsuarioNormal/PantallaUsuario'

const routes = {
  '/': {
    component: PantallaUsuario,
    requiresAuth: false
  },
  '/login': {
    component: Login,
    requiresAuth: false
  },
  '/admin': {
    component: PantallaAdmin,
    requiresAuth: true
  }, 
  
}

const Indice_Nav = () => {
  const { token } = useToken() 
  const { page, navigate } = useNavigate()
  let CurrentPage = () => <h1>404</h1>
  if (routes[page] && routes[page].requiresAuth && !token) {
    navigate('/login')
  }

  CurrentPage = routes[page].component
  return (
    <div>
      <CurrentPage />
    </div>
  )


}

export default Indice_Nav