import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import CardResumo from '../components/CardResumo'
import BarraUsuario from '../components/BarraUsuario'
import {apiFetch} from '../services/api'

function AreaTrabalho(){

  const [indicadores, setIndicadores] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')


  useEffect(() => {
    async function carregarIndicadores() {
      try {
        const tarefas_todos = await apiFetch('/todos')
        const tarefas_pendentes = tarefas_todos.filter((tareafa) => !tareafa.completed).length
        const tarefass_concluidas = tarefas_todos.filter((tarefa) => tarefa.completed).length

        setIndicadores([
          { id: 1, titulo: 'Projetos Pendentes', valor: 4, cor: 'warning' },
          { id: 2, titulo: 'Projetos Concluídos', valor: 7, cor: 'success' },
          { id: 3, titulo: 'Tarefas Pendentes', valor: tarefas_pendentes, cor: 'warning' },
          { id: 4, titulo: 'Tarefas Concluídas', valor: tarefass_concluidas, cor: 'success' },
        ])
      } catch (erroApi) {
        setErro('Não foi possível carregar os indicadores.')
      } finally {
        setCarregando(false)
      }
    }

    carregarIndicadores()
  }, [])

    function renderCard() {
      if (carregando) {
        return <p className="text-center text-muted">Carregando indicadores...</p>
      }

      if (erro) {
      return <div className="alert alert-danger">{erro}</div>
      }

      if (indicadores.length === 0) {
        return <p className="text-center text-muted">Nenhum indicador encontrado.</p>
      }

      return (
        <div className="row g-4 justify-content-center">
          {indicadores.map((indicador) => (
            <CardResumo key={indicador.id} {...indicador} />
          ))}
        </div>
      )
    }


    return (
        <div>
            <Navbar />
            <BarraUsuario nomeUsuario="Usuário" />    

            <div className="container my-5">
            <h4 className="mb-4 text-center">Resumo da Área de Trabalho</h4>
                {renderCard()}
            </div>
        </div>
    )

}

export default AreaTrabalho