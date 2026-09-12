import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import BarraUsuario from '../components/BarraUsuario'
import TarefaCard from '../components/TarefaCard'
import { apiFetch } from '../services/api'

// A API (/todos) não tem os mesmos campos que a nossa tela usa.
// Essa função "traduz" o formato da API para o formato que já conhecemos.
function converterTarefaDaApi(tarefaApi) {
  return {
    id: tarefaApi.id,
    titulo: tarefaApi.title,
    descricao: '', // a API não tem esse campo — fica só no front
    prioridade: 'Baixa', // idem
    status: tarefaApi.completed ? 'Concluída' : 'Pendente',
  }
}

function ListaTarefas() {
  // null = ainda não sabemos (carregando ou deu erro antes de chegar dado)
  const [tarefas, setTarefas] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('Baixa')
  const [status, setStatus] = useState('Pendente')
  const [tarefaEmEdicaoId, setTarefaEmEdicaoId] = useState(null)

  // ---------- READ ----------
  useEffect(() => {
    async function carregarTarefas() {
      try {
        const dados = await apiFetch('/todos')
        // A API tem 200 tarefas; por hoje, mostramos só as 8 primeiras
        // (paginação de verdade fica para uma aula futura).
        setTarefas(dados.slice(0, 8).map(converterTarefaDaApi))
      } catch (erroApi) {
        setErro('Não foi possível carregar as tarefas.')
      } finally {
        setCarregando(false)
      }
    }

    carregarTarefas()
  }, [])

  function limparFormulario() {
    setTitulo('')
    setDescricao('')
    setPrioridade('Baixa')
    setStatus('Pendente')
    setTarefaEmEdicaoId(null)
  }

  async function handleSalvar(e) {
    e.preventDefault()

    if (titulo.trim() === '') {
      alert('Informe o título da tarefa.')
      return
    }

    const corpo = {
      title: titulo,
      completed: status === 'Concluída',
      userId: 1,
    }

    try {
      if (tarefaEmEdicaoId === null) {
        // ---------- CREATE ----------
        const criada = await apiFetch('/todos', {
          method: 'POST',
          body: JSON.stringify(corpo),
        })

        // O JSONPlaceholder sempre devolve id 201 e NÃO salva de verdade —
        // por isso também atualizamos a lista localmente, como já
        // fazíamos antes de existir API (atualização otimista).
        const novaTarefa = {
          id: criada.id ?? Date.now(),
          titulo,
          descricao,
          prioridade,
          status,
        }
        setTarefas([...tarefas, novaTarefa])
      } else {
        // ---------- UPDATE ----------
        await apiFetch(`/todos/${tarefaEmEdicaoId}`, {
          method: 'PUT',
          body: JSON.stringify(corpo),
        })

        setTarefas(
          tarefas.map((tarefa) =>
            tarefa.id === tarefaEmEdicaoId
              ? { ...tarefa, titulo, descricao, prioridade, status }
              : tarefa
          )
        )
      }

      limparFormulario()
    } catch (erroApi) {
      alert('Não foi possível salvar a tarefa. Tente novamente.')
    }
  }

  function handleEditar(id) {
    const tarefa = tarefas.find((t) => t.id === id)
    setTitulo(tarefa.titulo)
    setDescricao(tarefa.descricao)
    setPrioridade(tarefa.prioridade)
    setStatus(tarefa.status)
    setTarefaEmEdicaoId(id)
  }

  async function handleExcluir(id) {
    // ---------- DELETE ----------
    try {
      await apiFetch(`/todos/${id}`, { method: 'DELETE' })
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
      if (id === tarefaEmEdicaoId) limparFormulario()
    } catch (erroApi) {
      alert('Não foi possível excluir a tarefa. Tente novamente.')
    }
  }

  function desenharCard() {
    if (carregando) {
      return <p className="text-muted">Carregando tarefas...</p>
    }

    if (erro) {
      return <div className="alert alert-danger">{erro}</div>
    }

    if (tarefas.length === 0) {
      return <p className="text-muted">Não possui dados.</p>
    }

    return (
      <div className="row g-3">
        {tarefas.map((tarefa) => (
          <TarefaCard
            key={tarefa.id}
            {...tarefa}
            onEditar={() => handleEditar(tarefa.id)}
            onExcluir={() => handleExcluir(tarefa.id)}
          />
        ))}
      </div>
    )
  }

  const emEdicao = tarefaEmEdicaoId !== null

  return (
    <div>
      <Navbar />
      <BarraUsuario />

      <div className="container mt-4">
        <h1 className="mb-4">Tarefas</h1>

        {emEdicao && (
          <div className="alert alert-warning py-2">
            Editando tarefa — altere os campos e clique em &quot;Salvar&quot;.
          </div>
        )}

        <form onSubmit={handleSalvar} className="row g-2 mb-4">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value)}
            >
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div className="col-md-2">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pendente">Pendente</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
            </select>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" type="submit">
              {emEdicao ? 'Salvar' : '+ Nova Tarefa'}
            </button>
          </div>
          {emEdicao && (
            <div className="col-12">
              <button
                type="button"
                className="btn btn-link btn-sm"
                onClick={limparFormulario}
              >
                Cancelar edição
              </button>
            </div>
          )}
        </form>

        {desenharCard()}
      </div>
    </div>
  )
}

export default ListaTarefas
