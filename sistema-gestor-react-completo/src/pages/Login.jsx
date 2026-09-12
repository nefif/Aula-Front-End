import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiFetch } from '../services/api'
import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (usuario === '' || senha === '') {
      setErro('Preencha usuário e senha.')
      return
    }

    setErro('')
    setCarregando(true)

    try {
      // O JSONPlaceholder não tem endpoint de login de verdade.
      // Simulamos: buscamos os usuários e conferimos se o "usuario"
      // digitado bate com o campo "username" de algum deles.
      //
      // Importante: não existe verificação real de senha aqui — em uma
      // API de verdade, isso aconteceria no servidor, nunca no front-end.
      const usuarios = await apiFetch('/users')
      const usuarioEncontrado = usuarios.find(
        (u) => u.username.toLowerCase() === usuario.toLowerCase()
      )

      if (!usuarioEncontrado) {
        setErro('Usuário não encontrado.')
        return
      }

      // Token "fake" — a API não gera nenhum de verdade. Em uma API real,
      // o token viria pronto na resposta do login.
      const tokenFake = btoa(`${usuarioEncontrado.username}-${Date.now()}`)

      login(usuarioEncontrado, tokenFake)
      navigate('/area-trabalho')
    } catch (erroApi) {
      setErro('Não foi possível conectar. Tente novamente.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="text-center mb-1">Sistema Gestor de Projetos</h3>
          <p className="text-center text-muted mb-4">Acesse sua conta</p>

          {erro && <div className="alert alert-danger">{erro}</div>}
          {carregando && <div className="alert alert-info">Entrando...</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">Nome de usuário</label>
              <input
                type="text"
                id="usuario"
                className="form-control"
                placeholder="Digite seu usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                disabled={carregando}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input
                type="password"
                id="senha"
                className="form-control"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                disabled={carregando}
              />
            </div>

            <div className="mb-3 text-end">
              <a href="#">Esqueci minha senha</a>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-2" disabled={carregando}>
              Entrar
            </button>
            <button type="button" className="btn btn-outline-secondary w-100" disabled={carregando}>
              Cadastrar Usuário
            </button>
          </form>

          <p className="text-center text-muted small mt-3 mb-0">
            Dica: use o usuário <code>Bret</code> (dado real do JSONPlaceholder) — qualquer senha é aceita.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
