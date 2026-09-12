import { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const salvo = localStorage.getItem('usuario')
    return salvo ? JSON.parse(salvo) : null
  })
  const [token, setToken] = useState(() => localStorage.getItem('token'))

  function login(usuarioLogado, tokenGerado) {
    setUsuario(usuarioLogado)
    setToken(tokenGerado)
    localStorage.setItem('usuario', JSON.stringify(usuarioLogado))
    localStorage.setItem('token', tokenGerado)
  }

  function logout() {
    setUsuario(null)
    setToken(null)
    localStorage.removeItem('usuario')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
