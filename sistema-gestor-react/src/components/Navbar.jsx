function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sistema Gestor de Projetos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="listar-projetos.html">Projetos</a></li>
            <li className="nav-item"><a className="nav-link" href="listar-tarefas.html">Tarefas</a></li>
            <li className="nav-item"><a className="nav-link" href="listar-usuarios.html">Usuários</a></li>
          </ul>
        </div>
      </div>
  </nav>
  )
}

export default Navbar
