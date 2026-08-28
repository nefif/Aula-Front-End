import { useState } from 'react'

function Login({}) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (usuario === '' || senha === '') {
      setErro('Preencha usuário e senha.')
      return
    }
    setErro('')
    aoLogar(usuario)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="text-center mb-1">Sistema Gestor de Projetos</h3>
          <p className="text-center text-muted mb-4">Acesse sua conta</p>

          {erro && <div className="alert alert-danger">{erro}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">Nome de usuário</label>
              <input
                type="text"
                id="usuario"
                className="form-control"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input
                type="password"
                id="senha"
                className="form-control"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="mb-3 text-end">
              <a href="#">Esqueci minha senha</a>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-2">Entrar</button>
            <button type="button" className="btn btn-outline-secondary w-100">Cadastrar Usuário</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login