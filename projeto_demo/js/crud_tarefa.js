// ==============================================================================
// BLOCO 1: GERENCIAMENTO DE ESTADO E REGRA DE NEGÓCIO (futuro Custom Hook)
// Agrupa as variáveis globais e as funções que manipulam o array de tarefas.
// ==============================================================================

let tarefas = [];
let idTarefaEmEdicao = null;

function adicionarOuAtualizarTarefa(dadosFormulario) {
  const { titulo, descricao, prioridade, status } = dadosFormulario;

  if (idTarefaEmEdicao === null) {
    // Adicionar nova tarefa
    tarefas.push({ id: Date.now(), titulo, descricao, prioridade, status });
  } else {
    // Atualizar tarefa existente
    const tarefa = tarefas.find(t => t.id === idTarefaEmEdicao);
    if (tarefa) {
      tarefa.titulo = titulo;
      tarefa.descricao = descricao;
      tarefa.prioridade = prioridade;
      tarefa.status = status;
    }
    idTarefaEmEdicao = null;
  }
}

function excluirTarefa(id) {
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
}

function buscarTarefaPorId(id) {
  return tarefas.find(tarefa => tarefa.id === id);
}


// ==============================================================================
  // BLOCO 2: ITEM DA LISTA / CARD (futuro componente TaskCard)
  // Responsável puramente pela geração do HTML de uma única tarefa.
// ==============================================================================

function criarHtmlCardTarefa(tarefa) {
  return `
    <div class="col-md-4">
      <div class="card shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${tarefa.titulo}</h5>
          <p class="card-text">${tarefa.descricao || ""}</p>
          <p class="mb-1"><span class="badge bg-secondary">${tarefa.prioridade}</span></p>
          <p class="mb-2"><span class="badge bg-info text-dark">${tarefa.status}</span></p>
          <button class="btn btn-warning btn-sm" data-id="${tarefa.id}" data-acao="editar">Editar</button>
          <button class="btn btn-danger btn-sm" data-id="${tarefa.id}" data-acao="excluir">Excluir</button>
        </div>
      </div>
    </div>
  `;
}


// ==============================================================================
// BLOCO 3: LISTA DE TAREFAS (futuro componente TaskList)
// Responsável por iterar sobre os dados e renderizar a coleção no DOM.
// ==============================================================================

function renderizarTarefas() {
  const lista = document.querySelector("#listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach(tarefa => {
    lista.innerHTML += criarHtmlCardTarefa(tarefa);
  });
}


// ==============================================================================
// BLOCO 4: FORMULÁRIO E MODAL (futuro componente TaskModalForm)
// Agrupa as seleções, preenchimento, validação e manipulação do formulário.
// ==============================================================================

const modalTarefaEl = document.querySelector("#modalTarefa");
const modalTarefa = new bootstrap.Modal(modalTarefaEl);
const formTarefa = document.querySelector("#formTarefa");

function preencherFormularioParaEdicao(tarefa) {
  document.querySelector("#tituloTarefa").value = tarefa.titulo;
  document.querySelector("#descricaoTarefa").value = tarefa.descricao || "";
  document.querySelector("#prioridadeTarefa").value = tarefa.prioridade;
  document.querySelector("#statusTarefa").value = tarefa.status;
  
  idTarefaEmEdicao = tarefa.id;
  modalTarefa.show();
}

function resetarFormularioEModal() {
  idTarefaEmEdicao = null;
  formTarefa.reset();
}

function fecharModal() {
  modalTarefa.hide();
}

function obterDadosFormulario() {
  const titulo = document.querySelector("#tituloTarefa").value;

  if (titulo.trim() === "") {
    alert("Informe o título da tarefa.");
    return null;
  }

  return {
    titulo,
    descricao: document.querySelector("#descricaoTarefa").value,
    prioridade: document.querySelector("#prioridadeTarefa").value,
    status: document.querySelector("#statusTarefa").value
  };
}


// ==============================================================================
// BLOCO 5: ORQUESTRADOR / APLICAÇÃO PRINCIPAL (futuro componente TaskApp)
// Agrupa a escuta de eventos globais e direciona o fluxo das ações.
// ==============================================================================

// Evento: Botão "Abrir Modal / Nova Tarefa"
document.querySelector("#btnAbrirModalTarefa").addEventListener("click", function () {
  resetarFormularioEModal();
});

// Evento: Clique na lista (Ações de Editar ou Excluir via Event Delegation)
document.querySelector("#listaTarefas").addEventListener("click", function (event) {
  const id = Number(event.target.dataset.id);
  const acao = event.target.dataset.acao;

  if (acao === "excluir") {
    excluirTarefa(id);
    renderizarTarefas();
  }

  if (acao === "editar") {
    const tarefa = buscarTarefaPorId(id);
    if (tarefa) {
      preencherFormularioParaEdicao(tarefa);
    }
  }
});

// Evento: Botão "Salvar Tarefa" dentro do modal
document.querySelector("#btnSalvarTarefa").addEventListener("click", function () {
  const dados = obterDadosFormulario();
  
  if (dados) {
    adicionarOuAtualizarTarefa(dados);
    renderizarTarefas();
    resetarFormularioEModal();
    fecharModal();
  }
});