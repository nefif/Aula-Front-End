let tarefasTM = [];
let idTarefaTMEmEdicao = null;
let filtroAtual = "todos";

const modalTarefaTM = new bootstrap.Modal(document.querySelector("#modalTarefaTM"));
const formTarefaTM = document.querySelector("#formTarefaTM");

function salvarTarefasTM() {
  localStorage.setItem("tarefasTM", JSON.stringify(tarefasTM));
}

function carregarTarefasTM() {
  const dados = localStorage.getItem("tarefasTM");
  tarefasTM = dados ? JSON.parse(dados) : [];
  renderizarTarefasTM();
}

function atualizarContadores() {
  document.querySelector("#contTotal").textContent = tarefasTM.length;
  document.querySelector("#contPendentes").textContent =
    tarefasTM.filter(tarefa => tarefa.status === "Pendente").length;
  document.querySelector("#contAndamento").textContent =
    tarefasTM.filter(tarefa => tarefa.status === "Em andamento").length;
  document.querySelector("#contConcluidas").textContent =
    tarefasTM.filter(tarefa => tarefa.status === "Concluída").length;
}

function renderizarTarefasTM() {
  const lista = document.querySelector("#listaTarefasTM");
  lista.innerHTML = "";

  const tarefasFiltradas = filtroAtual === "todos"
    ? tarefasTM
    : tarefasTM.filter(tarefa => tarefa.status === filtroAtual);

  tarefasFiltradas.forEach(tarefa => {
    lista.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${tarefa.titulo}</h5>
            <p class="mb-1"><span class="badge bg-secondary">${tarefa.prioridade}</span></p>
            <p class="mb-2"><span class="badge bg-info text-dark">${tarefa.status}</span></p>
            <button class="btn btn-warning btn-sm" data-id="${tarefa.id}" data-acao="editar">Editar</button>
            <button class="btn btn-danger btn-sm" data-id="${tarefa.id}" data-acao="excluir">Excluir</button>
          </div>
        </div>
      </div>
    `;
  });

  atualizarContadores();
}

document.querySelector("#btnAbrirModalTarefaTM").addEventListener("click", function () {
  idTarefaTMEmEdicao = null;
  formTarefaTM.reset();
});

document.querySelector("#listaTarefasTM").addEventListener("click", function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.dataset.acao === "excluir") {
    tarefasTM = tarefasTM.filter(tarefa => tarefa.id !== id);
    salvarTarefasTM();
    renderizarTarefasTM();
  }

  if (event.target.dataset.acao === "editar") {
    const tarefa = tarefasTM.find(tarefa => tarefa.id === id);

    document.querySelector("#tituloTarefaTM").value = tarefa.titulo;
    document.querySelector("#prioridadeTarefaTM").value = tarefa.prioridade;
    document.querySelector("#statusTarefaTM").value = tarefa.status;

    idTarefaTMEmEdicao = id;
    modalTarefaTM.show();
  }
});

document.querySelector("#btnSalvarTarefaTM").addEventListener("click", function () {
  const titulo = document.querySelector("#tituloTarefaTM").value;

  if (titulo.trim() === "") {
    alert("Informe o título da tarefa.");
    return;
  }

  const prioridade = document.querySelector("#prioridadeTarefaTM").value;
  const status = document.querySelector("#statusTarefaTM").value;

  if (idTarefaTMEmEdicao === null) {
    tarefasTM.push({ id: Date.now(), titulo, prioridade, status });
  } else {
    const tarefa = tarefasTM.find(tarefa => tarefa.id === idTarefaTMEmEdicao);
    tarefa.titulo = titulo;
    tarefa.prioridade = prioridade;
    tarefa.status = status;
    idTarefaTMEmEdicao = null;
  }

  salvarTarefasTM();
  renderizarTarefasTM();
  formTarefaTM.reset();
  modalTarefaTM.hide();
});

document.querySelector("#filtrosTarefaTM").addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;

  document.querySelectorAll("#filtrosTarefaTM button").forEach(botao => {
    botao.classList.remove("active");
  });
  event.target.classList.add("active");

  filtroAtual = event.target.dataset.filtro;
  renderizarTarefasTM();
});

document.querySelector("#btnCarregarExemplo").addEventListener("click", async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const todos = await response.json();

    const novasTarefas = todos.map(item => ({
      id: Date.now() + item.id,
      titulo: item.title,
      prioridade: "Média",
      status: item.completed ? "Concluída" : "Pendente"
    }));

    tarefasTM = tarefasTM.concat(novasTarefas);
    salvarTarefasTM();
    renderizarTarefasTM();
  } catch (erro) {
    alert("Não foi possível carregar as tarefas de exemplo.");
  }
});

carregarTarefasTM();