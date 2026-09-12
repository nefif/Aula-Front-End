import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function BarraUsuario() {
  const navigate = useNavigate()
  const { usuario, logout } = useAuth()

  function handleDeslogar() {
    logout()
    navigate('/')
  }

  return (
    <div className="bg-white border-bottom px-4 py-2 d-flex align-items-center gap-3">
      <span>
        Bem-vindo(a), <strong>{usuario?.name ?? 'Usuário'}</strong>!
      </span>
      <button className="btn btn-outline-danger btn-sm" onClick={handleDeslogar}>
        Deslogar
      </button>
    </div>
  )
}

export default BarraUsuario
