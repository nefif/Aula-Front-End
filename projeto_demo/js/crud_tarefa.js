let tarefas = [];
let idTarefaEmEdicao = null;

const modalTarefaEl = document.querySelector("#modalTarefa");
const modalTarefa = new bootstrap.Modal(modalTarefaEl);
const formTarefa = document.querySelector("#formTarefa");

document.querySelector("#btnAbrirModalTarefa").addEventListener("click", function () {
  idTarefaEmEdicao = null;
  formTarefa.reset();
});

function renderizarTarefas() {
  const lista = document.querySelector("#listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach(tarefa => {
    lista.innerHTML += `
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
  });
}

document.querySelector("#listaTarefas").addEventListener("click", function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.dataset.acao === "excluir") {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    renderizarTarefas();
  }

  if (event.target.dataset.acao === "editar") {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);

    document.querySelector("#tituloTarefa").value = tarefa.titulo;
    document.querySelector("#descricaoTarefa").value = tarefa.descricao || "";
    document.querySelector("#prioridadeTarefa").value = tarefa.prioridade;
    document.querySelector("#statusTarefa").value = tarefa.status;

    idTarefaEmEdicao = id;
    modalTarefa.show();
  }
});

document.querySelector("#btnSalvarTarefa").addEventListener("click", function () {
  const titulo = document.querySelector("#tituloTarefa").value;

  if (titulo.trim() === "") {
    alert("Informe o título da tarefa.");
    return;
  }

  const descricao = document.querySelector("#descricaoTarefa").value;
  const prioridade = document.querySelector("#prioridadeTarefa").value;
  const status = document.querySelector("#statusTarefa").value;

  if (idTarefaEmEdicao === null) {
    tarefas.push({ id: Date.now(), titulo, descricao, prioridade, status });
  } else {
    const tarefa = tarefas.find(tarefa => tarefa.id === idTarefaEmEdicao);
    tarefa.titulo = titulo;
    tarefa.descricao = descricao;
    tarefa.prioridade = prioridade;
    tarefa.status = status;
    idTarefaEmEdicao = null;
  }

  renderizarTarefas();
  formTarefa.reset();
  modalTarefa.hide();
});