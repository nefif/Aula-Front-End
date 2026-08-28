import { useState } from 'react'
import Navbar from '../components/Navbar'
import BarraUsuario from '../components/BarraUsuario'
import TarefaCard from '../components/TarefaCard'

function ListaTarefas({ aoDeslogar }) {
  const [tarefas, setTarefas] = useState([
    { id: 1001, titulo: 'Estudar para a prova', descricao: 'Revisar capítulo 3 antes de sexta', prioridade: 'Alta', status: 'Pendente' },
  ])

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('Baixa')
  const [status, setStatus] = useState('Pendente')
  const [tarefaEmEdicaoId, setTarefaEmEdicaoId] = useState(null)

  function limparFormulario() {
    setTitulo('')
    setDescricao('')
    setPrioridade('Baixa')
    setStatus('Pendente')
    setTarefaEmEdicaoId(null)
  }

  function handleSalvar(e) {
    e.preventDefault()
    if (titulo.trim() === ''){alert("Informe o título do item."); return}

    if (tarefaEmEdicaoId === null) {
      const novaTarefa = { id: Date.now(), titulo, descricao, prioridade, status }
      setTarefas([...tarefas, novaTarefa])
    } else {
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.id === tarefaEmEdicaoId
            ? { ...tarefa, titulo, descricao, prioridade, status }
            : tarefa
        )
      )
    }

    limparFormulario()
  }

  function handleEditar(id) {
    const tarefa = tarefas.find((t) => t.id === id)
    setTitulo(tarefa.titulo)
    setDescricao(tarefa.descricao)
    setPrioridade(tarefa.prioridade)
    setStatus(tarefa.status)
    setTarefaEmEdicaoId(id)
  }

  function handleExcluir(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
    if (id === tarefaEmEdicaoId) limparFormulario()
  }

  const emEdicao = tarefaEmEdicaoId !== null

  return (
    <div>
      <Navbar/>
      <BarraUsuario nomeUsuario="Usuário" onDeslogar={aoDeslogar} />

      <div className="container mt-4">
        <h1 className="mb-4">Tarefas</h1>

        {emEdicao && (
          <div className="alert alert-warning py-2">
            Editando tarefa — altere os campos e clique em "Salvar".
          </div>
        )}

        <form onSubmit={handleSalvar} className="row g-2 mb-4">
          <div className="col-md-3">
            <input className="form-control" placeholder="Título" value={titulo}
              onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Descrição" value={descricao}
              onChange={(e) => setDescricao(e.target.value)} />
          </div>
          <div className="col-md-2">
            <select className="form-select" value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
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
              <button type="button" className="btn btn-link btn-sm" onClick={limparFormulario}>
                Cancelar edição
              </button>
            </div>
          )}
        </form>

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
      </div>
    </div>
  )
}

export default ListaTarefas