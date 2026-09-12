import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="text-muted mb-4">Página não encontrada.</p>
      <Link to="/" className="btn btn-primary">
        Voltar para o início
      </Link>
    </div>
  )
}

export default NotFound
