import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import AreaTrabalho from './pages/AreaTrabalho'
import ListaTarefas from './pages/ListaTarefas'
import UseEffectPlayground from './pages/UseEffectPlayground'
import NotFound from './pages/NotFound'
import RotaProtegida from './components/RotaProtegida'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/area-trabalho"
        element={
          <RotaProtegida>
            <AreaTrabalho />
          </RotaProtegida>
        }
      />

      <Route
        path="/tarefas"
        element={
          <RotaProtegida>
            <ListaTarefas />
          </RotaProtegida>
        }
      />

      {/* Rota de apoio didático — sem link no Navbar, acessar direto pela URL */}
      <Route path="/useeffect-playground" element={<UseEffectPlayground />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
