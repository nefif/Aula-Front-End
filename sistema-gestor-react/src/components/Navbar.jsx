import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/area-trabalho">Sistema Gestor de Projetos</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/projetos">Projetos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tarefas">Tarefas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/usuarios">Usuários</Link></li>
          </ul>
        </div>
      </div>
  </nav>
  )
}

export default Navbar
