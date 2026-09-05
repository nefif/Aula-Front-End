import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import BarraUsuario from '../components/BarraUsuario'
import TarefaCard from '../components/TarefaCard'

function ListaTarefas() {


  
  const [tarefas, setTarefas] = useState([
    { id: 1001, titulo: 'Estudar para a prova', descricao: 'Revisar capítulo 3 antes de sexta', prioridade: 'Alta', status: 'Pendente' },
  ])

  function renderTarefa(){
    if (tarefas === null)
      return <p className="text-muted">Carregando tarefas...</p>

    if (tarefas.length === 0) {
      return <p className="text-muted">Nenhuma tarefa encontrada.</p>
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

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState('Baixa')
  const [status, setStatus] = useState('Pendente')

  function limparFormulario() {
    setTitulo('')
    setDescricao('')
    setPrioridade('Baixa')
    setStatus('Pendente')
  }

  function handleSalvar(e) {
    e.preventDefault()
    if (titulo.trim() === ''){
      alert("Informe o título do item.");  
    }
    if (titulo.trim() !== '') {
      alert("Tarefa Salva");       
    }
    limparFormulario()
  }

  function handleEditar() {
    alert("Editar");  
  }

  function handleExcluir() {
    alert("Exluir");  
  }


  return (
    <div>
      <Navbar/>
      <BarraUsuario nomeUsuario="Usuário"/>

      <div className="container mt-4">
        <h1 className="mb-4">Tarefas</h1>
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
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
              <option value="Concluída">Cancelada</option>
            </select>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" type="submit">
              + Nova Tarefa
            </button>
          </div>
        </form>

          {renderTarefa()}
        
      </div>
    </div>
  )
}

export default ListaTarefas