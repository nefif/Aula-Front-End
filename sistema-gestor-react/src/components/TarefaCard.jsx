function TarefaCard({ titulo, descricao, prioridade, status, onEditar, onExcluir }) {
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descricao}</p>
          <div className="mb-2">
            <span className="badge bg-secondary me-1">{prioridade}</span>
            <span className="badge bg-info">{status}</span>
          </div>
          <div className="mt-auto d-flex gap-2">
            <button className="btn btn-warning btn-sm" onClick={onEditar}>
              Editar
            </button>
            <button className="btn btn-danger btn-sm" onClick={onExcluir}>
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TarefaCard