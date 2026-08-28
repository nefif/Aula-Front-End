function BarraUsuario({ nomeUsuario }) {
  return (
    <div className="bg-white border-bottom px-4 py-2 d-flex align-items-center gap-3">
      <span>Bem-vindo(a), <strong>{nomeUsuario}</strong>!</span>
      <button className="btn btn-outline-danger btn-sm">Deslogar</button>
    </div>
  )
}

export default BarraUsuario