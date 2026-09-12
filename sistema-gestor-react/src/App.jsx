import ListaTarefas from './pages/ListaTarefas'
import ListaTarefasAula from './pages/ListaTarefas_Aula'
import AreaTrabalho from './pages/AreaTrabalho'
import Login from './pages/Login'
import UseEffectPlayground from './pages/UseEffectPlayground'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/area-trabalho" element={<AreaTrabalho/>}/>
      <Route path="/tarefas" element={<ListaTarefas/>}/>
      <Route path="/tarefas-aula" element={<ListaTarefasAula/>}/>
    </Routes>
  )
}

export default App




