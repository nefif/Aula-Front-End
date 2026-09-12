function CardResumo({ titulo, valor, cor }) {
  return (
    <div className="col-6 col-md-3">
      <div className={`card text-center shadow-sm border-${cor}`}>
        <div className="card-body">
          <h6 className="card-title text-muted">{titulo}</h6>
          <p className="display-6 mb-0">{valor}</p>
        </div>
      </div>
    </div>
  )
}

export default CardResumo
