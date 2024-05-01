import './PantallaAdmin.css'
import { NavigationProvider } from '@hooks/useNavigate'
import Nav_Admin from './Nav_Admin'

const PantallaAdmin = () => {
  return(
    <div>
      <NavigationProvider>
        <Nav_Admin></Nav_Admin>
      </NavigationProvider>
    </div>
  )
}

export default PantallaAdmin