import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import AreaTrabalho from './pages/AreaTrabalho'
import ListaTarefas from './pages/ListaTarefas'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/area-trabalho" element={<AreaTrabalho />} />
      <Route path="/tarefas" element={<ListaTarefas />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
