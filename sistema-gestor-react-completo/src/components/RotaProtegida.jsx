import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RotaProtegida({ children }) {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/" />
  }

  return children
}

export default RotaProtegida
