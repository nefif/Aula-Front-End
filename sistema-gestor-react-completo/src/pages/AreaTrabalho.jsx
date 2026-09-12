import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import BarraUsuario from '../components/BarraUsuario'
import CardResumo from '../components/CardResumo'
import { apiFetch } from '../services/api'

function AreaTrabalho() {
  const [indicadores, setIndicadores] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    async function carregarIndicadores() {
      try {
        const todos = await apiFetch('/todos')

        const pendentes = todos.filter((tarefa) => !tarefa.completed).length
        const concluidas = todos.filter((tarefa) => tarefa.completed).length

        setIndicadores([
          // Projetos: o módulo de Projetos ainda não existe no sistema,
          // então esses dois indicadores continuam estáticos por enquanto.
          // Quando existir uma tela de Projetos com API própria, é só
          // repetir aqui o mesmo padrão usado para as Tarefas abaixo.
          { id: 1, titulo: 'Projetos Pendentes', valor: 4, cor: 'warning' },
          { id: 2, titulo: 'Projetos Concluídos', valor: 7, cor: 'success' },
          { id: 3, titulo: 'Tarefas Pendentes', valor: pendentes, cor: 'warning' },
          { id: 4, titulo: 'Tarefas Concluídas', valor: concluidas, cor: 'success' },
        ])
      } catch (erroApi) {
        setErro('Não foi possível carregar os indicadores.')
      } finally {
        setCarregando(false)
      }
    }

    carregarIndicadores()
  }, [])

  return (
    <div>
      <Navbar />
      <BarraUsuario />

      <div className="container my-5">
        <h4 className="mb-4 text-center">Resumo da Área de Trabalho</h4>

        {erro && <div className="alert alert-danger">{erro}</div>}

        {carregando ? (
          <p className="text-center text-muted">Carregando indicadores...</p>
        ) : (
          <div className="row g-4 justify-content-center">
            {indicadores.map((indicador) => (
              <CardResumo key={indicador.id} {...indicador} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AreaTrabalho
