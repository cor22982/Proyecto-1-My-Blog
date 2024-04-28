import './App.css'

import { TokenProvider } from '@hooks/useToken'
import { NavigationProvider } from '@hooks/useNavigate'
import Indice_Nav from './Indice_Nav'

function App() {
  return (
    <TokenProvider>
      <NavigationProvider>
        <Indice_Nav></Indice_Nav>
      </NavigationProvider>
    </TokenProvider>
  )
}

export default App
