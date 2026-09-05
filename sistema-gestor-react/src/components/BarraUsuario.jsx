import { useNavigate } from 'react-router-dom'

function BarraUsuario({ nomeUsuario }) {
  const navigate = useNavigate()

  function handleDeslogar() {
    navigate('/')
  }

  return (
    <div className="bg-white border-bottom px-4 py-2 d-flex align-items-center gap-3">
      <span>
        Bem-vindo(a), <strong>{nomeUsuario}</strong>!
      </span>
      <button className="btn btn-outline-danger btn-sm" onClick={handleDeslogar}>
        Deslogar
      </button>
    </div>
  )
}

export default BarraUsuario
