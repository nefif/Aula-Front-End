# Gabarito — Lista de Exercícios (Arrays, Objetos, CRUD, Persistência e API)

> Este gabarito acompanha o documento `Lista-de-Exercicios-Arrays-Objetos-CRUD-Persistencia-API.md`. Nos exercícios com HTML (Blocos 4, 5 e 6), o código abaixo deve ser colocado dentro da tag `<script>` do HTML fornecido no enunciado — ele não é repetido aqui.
>
> Existe mais de uma forma correta de resolver a maioria dos exercícios. Use este gabarito como referência de comparação, não como única resposta certa.

---

## BLOCO 1 — ARRAYS

### Exercício 1
```javascript
const frutas = [];
frutas.push("Maçã");
frutas.push("Banana");
frutas.push("Laranja");
console.log(frutas);
```

### Exercício 2
```javascript
console.log(frutas.length);
if (frutas.length > 0) {
  console.log("Existem frutas cadastradas.");
}
```

### Exercício 3
```javascript
const listaCompras = [];
listaCompras.push("Arroz");
listaCompras.push("Feijão");
listaCompras.push("Leite");
listaCompras.push("Café");
listaCompras.push("Pão");

console.log(listaCompras);
console.log(listaCompras[0]);
console.log(listaCompras[listaCompras.length - 1]);
```

### Exercício 4
```javascript
console.log("Antes:", listaCompras);
listaCompras.pop();
console.log("Depois:", listaCompras);
```

### Exercício 5
```javascript
const numeros = [4, 8, 15, 16, 23, 42];
numeros.forEach(numero => {
  console.log("Número: " + numero);
});
```

### Exercício 6
```javascript
for (const numero of numeros) {
  console.log("Número: " + numero);
}
```

### Exercício 7
```javascript
const nomesCadastrados = ["Ana", "Carlos", "Beatriz", "João", "Lucas"];
console.log(nomesCadastrados.includes("Maria"));
console.log(nomesCadastrados.includes("Pedro"));
```

### Exercício 8
```javascript
const tarefas = [];

function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
}

adicionarTarefa("Estudar JS");
adicionarTarefa("Fazer exercícios");
adicionarTarefa("Revisar CSS");
adicionarTarefa("Montar projeto");
adicionarTarefa("Descansar");

console.log(tarefas);
console.log(tarefas.length);

tarefas.pop();
console.log(tarefas.length);
```

---

## BLOCO 2 — OBJETOS

### Exercício 9
```javascript
const cliente = {
  nome: "Maria",
  email: "maria@email.com",
  telefone: "99999-0000",
  cidade: "Recife"
};

console.log(cliente.nome);
console.log(cliente.email);
```

### Exercício 10
```javascript
console.log("Antes:", cliente);
cliente.cidade = "Olinda";
console.log("Depois:", cliente);
```

### Exercício 11
```javascript
cliente.idade = 28;
console.log(cliente);
```

### Exercício 12
```javascript
const produto = {
  nome: "Notebook",
  preco: 3500,
  categorias: ["Informática", "Eletrônicos"]
};

console.log(produto.nome, produto.categorias[0]);
```

### Exercício 13
```javascript
const cliente2 = {
  nome: "Maria",
  endereco: {
    cidade: "Recife",
    estado: "PE"
  }
};

console.log(`${cliente2.nome} mora em ${cliente2.endereco.cidade} - ${cliente2.endereco.estado}`);
```

### Exercício 14
```javascript
const produto2 = { nome: "Mouse", preco: 100, estoque: 20 };

function exibirProduto(produto) {
  console.log(`Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque}`);
}

exibirProduto(produto2);
```

### Exercício 15
```javascript
const pessoa = {
  nome: "João",
  apresentar() {
    console.log(`Olá, eu sou ${this.nome}`);
  }
};

pessoa.apresentar();
```

### Exercício 16
```javascript
const produto3 = {
  id: 1,
  nome: "Teclado",
  categoria: "Informática",
  preco: 250,
  estoque: 10,
  disponivel: true
};

console.log(produto3.nome, produto3.preco);

produto3.preco = 220;
produto3.estoque -= 1;
produto3.disponivel = !produto3.disponivel;

function exibirProduto(produto) {
  console.log(
    `Nome: ${produto.nome} | Preço: R$ ${produto.preco} | ` +
    `Estoque: ${produto.estoque} | Disponível: ${produto.disponivel}`
  );
}

exibirProduto(produto3);
```

---

## BLOCO 3 — ARRAY DE OBJETOS + MÉTODOS

*(usando o array `produtos` fornecido no enunciado do bloco)*

### Exercício 17
```javascript
console.log(produtos[0].nome);
console.log(produtos[2].preco);
```

### Exercício 18
```javascript
produtos.forEach(produto => {
  console.log(`${produto.nome} - R$ ${produto.preco}`);
});
```

### Exercício 19
```javascript
const nomesProdutos = produtos.map(produto => produto.nome);
console.log(nomesProdutos);
```

### Exercício 20
```javascript
const produtosComDesconto = produtos.map(produto => {
  return {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco * 0.9
  };
});

/* const produtosComDesconto = produtos.map(produto => {
  return { ...produto, preco: produto.preco * 0.9 };
}); */

console.log(produtosComDesconto);
console.log(produtos); // o array original continua igual
```

### Exercício 21
```javascript
const produtosCaros = produtos.filter(produto => produto.preco > 500);
console.log(produtosCaros);
```

### Exercício 22
```javascript
const semEstoque = produtos.filter(produto => produto.estoque === 0);
console.log(semEstoque);
```

### Exercício 23
```javascript
const produtoEncontrado = produtos.find(produto => produto.id === 3);
console.log(produtoEncontrado.nome);
```

### Exercício 24
```javascript
const existeMoveis = produtos.some(produto => produto.categoria === "Móveis");
const existeSemEstoque = produtos.some(produto => produto.estoque === 0);

console.log(existeMoveis);
console.log(existeSemEstoque);
```

### Exercício 25
```javascript
const valorTotalEstoque = produtos.reduce((total, produto) => {
  return total + produto.preco;
}, 0);

console.log(valorTotalEstoque);
```

### Exercício 26
```javascript
console.log(produtos.map(produto => produto.nome));                       // 1
console.log(produtos.filter(produto => produto.preco > 500));             // 2
console.log(produtos.find(produto => produto.id === 3));                  // 3
console.log(produtos.some(produto => produto.nome === "Mouse"));          // 4
console.log(produtos.map(produto => produto.preco));                      // 5
console.log(produtos.some(produto => produto.estoque === 0));             // 6
```

---

## BLOCO 4 — CRUD NO FRONT-END

### Exercício 27
```javascript
let produtos = [];
const formulario = document.querySelector("#formProduto");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const preco = document.querySelector("#preco").value;
  const categoria = document.querySelector("#categoria").value;
  const estoque = document.querySelector("#estoque").value;

  const produto = {
    id: Date.now(),
    nome,
    preco: Number(preco),
    categoria,
    estoque: Number(estoque)
  };

  produtos.push(produto);
  console.log(produtos);

  formulario.reset();
});
```

### Exercício 28
Adicione a função de renderização (ela ainda não precisa ser chamada em lugar nenhum neste exercício, o objetivo é só criá-la):
```javascript
function renderizarProdutos() {
  const lista = document.querySelector("#listaProdutos");
  lista.innerHTML = "";

  produtos.forEach(produto => {
    lista.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text mb-1">Categoria: ${produto.categoria}</p>
            <p class="card-text mb-1">Preço: R$ ${produto.preco}</p>
            <p class="card-text">Estoque: ${produto.estoque}</p>
          </div>
        </div>
      </div>
    `;
  });
}
```

### Exercício 29
Junte tudo: no `submit`, depois do `produtos.push(produto)`, chame `renderizarProdutos()`.
```javascript
let produtos = [];
const formulario = document.querySelector("#formProduto");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const preco = document.querySelector("#preco").value;
  const categoria = document.querySelector("#categoria").value;
  const estoque = document.querySelector("#estoque").value;

  const produto = {
    id: Date.now(),
    nome,
    preco: Number(preco),
    categoria,
    estoque: Number(estoque)
  };

  produtos.push(produto);
  renderizarProdutos();
  formulario.reset();
});

function renderizarProdutos() {
  const lista = document.querySelector("#listaProdutos");
  lista.innerHTML = "";

  produtos.forEach(produto => {
    lista.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text mb-1">Categoria: ${produto.categoria}</p>
            <p class="card-text mb-1">Preço: R$ ${produto.preco}</p>
            <p class="card-text">Estoque: ${produto.estoque}</p>
          </div>
        </div>
      </div>
    `;
  });
}
```

### Exercício 30
Adicione o botão "Excluir" dentro do card renderizado e trate o clique com delegação de evento:
```javascript
function renderizarProdutos() {
  const lista = document.querySelector("#listaProdutos");
  lista.innerHTML = "";

  produtos.forEach(produto => {
    lista.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text mb-1">Categoria: ${produto.categoria}</p>
            <p class="card-text mb-1">Preço: R$ ${produto.preco}</p>
            <p class="card-text">Estoque: ${produto.estoque}</p>
            <button class="btn btn-danger btn-sm" data-id="${produto.id}" data-acao="excluir">Excluir</button>
          </div>
        </div>
      </div>
    `;
  });
}

document.querySelector("#listaProdutos").addEventListener("click", function (event) {
  if (event.target.dataset.acao === "excluir") {
    const id = Number(event.target.dataset.id);

    if (confirm("Tem certeza que deseja excluir este produto?")) {
      produtos = produtos.filter(produto => produto.id !== id);
      renderizarProdutos();
    }
  }
});
```

### Exercícios 31 e 32
Solução completa (create ou update, controlada por `idEmEdicao`):
```javascript
let produtos = [];
let idEmEdicao = null;

const formulario = document.querySelector("#formProduto");

function renderizarProdutos() {
  const lista = document.querySelector("#listaProdutos");
  lista.innerHTML = "";

  produtos.forEach(produto => {
    lista.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text mb-1">Categoria: ${produto.categoria}</p>
            <p class="card-text mb-1">Preço: R$ ${produto.preco}</p>
            <p class="card-text">Estoque: ${produto.estoque}</p>
            <button class="btn btn-warning btn-sm" data-id="${produto.id}" data-acao="editar">Editar</button>
            <button class="btn btn-danger btn-sm" data-id="${produto.id}" data-acao="excluir">Excluir</button>
          </div>
        </div>
      </div>
    `;
  });
}

document.querySelector("#listaProdutos").addEventListener("click", function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.dataset.acao === "editar") {
    const produto = produtos.find(produto => produto.id === id);

    document.querySelector("#nome").value = produto.nome;
    document.querySelector("#preco").value = produto.preco;
    document.querySelector("#categoria").value = produto.categoria;
    document.querySelector("#estoque").value = produto.estoque;

    idEmEdicao = id;
  }
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const preco = Number(document.querySelector("#preco").value);
  const categoria = document.querySelector("#categoria").value;
  const estoque = Number(document.querySelector("#estoque").value);

  if (idEmEdicao === null) {
    // CREATE
    produtos.push({ id: Date.now(), nome, preco, categoria, estoque });
  } else {
    // UPDATE
    const produto = produtos.find(produto => produto.id === idEmEdicao);
    produto.nome = nome;
    produto.preco = preco;
    produto.categoria = categoria;
    produto.estoque = estoque;
    idEmEdicao = null;
  }

  renderizarProdutos();
  formulario.reset();
});
```

### Exercício 33 — CRUD de Clientes
```javascript
let clientes = [];
const formularioCliente = document.querySelector("#formCliente");
const corpoTabelaClientes = document.querySelector("#corpoTabelaClientes");

function renderizarClientes() {
  corpoTabelaClientes.innerHTML = "";

  clientes.forEach(cliente => {
    corpoTabelaClientes.innerHTML += `
      <tr>
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.telefone}</td>
        <td>${cliente.cidade}</td>
        <td class="text-center">
          <button class="btn btn-danger btn-sm" data-id="${cliente.id}">Excluir</button>
        </td>
      </tr>
    `;
  });
}

formularioCliente.addEventListener("submit", function (event) {
  event.preventDefault();

  const cliente = {
    id: Date.now(),
    nome: document.querySelector("#nomeCliente").value,
    email: document.querySelector("#emailCliente").value,
    telefone: document.querySelector("#telefoneCliente").value,
    cidade: document.querySelector("#cidadeCliente").value
  };

  clientes.push(cliente);
  renderizarClientes();
  formularioCliente.reset();
});

corpoTabelaClientes.addEventListener("click", function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.tagName === "BUTTON") {
    clientes = clientes.filter(cliente => cliente.id !== id);
    renderizarClientes();
  }
});
```

### Exercício 34 — CRUD de Tarefas
```javascript
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
```

### Exercício 35 — CRUD de Livros
```javascript
let livros = [];
let idLivroEmEdicao = null;

const formLivro = document.querySelector("#formLivro");
const corpoTabelaLivros = document.querySelector("#corpoTabelaLivros");

function renderizarLivros() {
  corpoTabelaLivros.innerHTML = "";

  livros.forEach(livro => {
    corpoTabelaLivros.innerHTML += `
      <tr>
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        <td>${livro.disponivel ? "Disponível" : "Emprestado"}</td>
        <td class="text-center">
          <button class="btn btn-warning btn-sm" data-id="${livro.id}" data-acao="editar">Editar</button>
          <button class="btn btn-danger btn-sm" data-id="${livro.id}" data-acao="excluir">Excluir</button>
        </td>
      </tr>
    `;
  });
}

formLivro.addEventListener("submit", function (event) {
  event.preventDefault();

  const titulo = document.querySelector("#tituloLivro").value;
  const autor = document.querySelector("#autorLivro").value;
  const ano = Number(document.querySelector("#anoLivro").value);
  const disponivel = document.querySelector("#disponivelLivro").value === "true";

  if (idLivroEmEdicao === null) {
    livros.push({ id: Date.now(), titulo, autor, ano, disponivel });
  } else {
    const livro = livros.find(livro => livro.id === idLivroEmEdicao);
    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.disponivel = disponivel;
    idLivroEmEdicao = null;
  }

  renderizarLivros();
  formLivro.reset();
});

corpoTabelaLivros.addEventListener("click", function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.dataset.acao === "excluir") {
    livros = livros.filter(livro => livro.id !== id);
    renderizarLivros();
  }

  if (event.target.dataset.acao === "editar") {
    const livro = livros.find(livro => livro.id === id);

    document.querySelector("#tituloLivro").value = livro.titulo;
    document.querySelector("#autorLivro").value = livro.autor;
    document.querySelector("#anoLivro").value = livro.ano;
    document.querySelector("#disponivelLivro").value = String(livro.disponivel);

    idLivroEmEdicao = id;
  }
});
```

### Exercício 36 — Agenda de Contatos (com validação)
```javascript
let contatos = [];
let idContatoEmEdicao = null;

const modalContatoEl = document.querySelector("#modalContato");
const modalContato = new bootstrap.Modal(modalContatoEl);
const formContato = document.querySelector("#formContato");

document.querySelector("#btnAbrirModalContato").addEventListener("click", function () {
  idContatoEmEdicao = null;
  formContato.reset();
});

function renderizarContatos() {
  const lista = document.querySelector("#listaContatos");
  lista.innerHTML = "";

  contatos.forEach(contato => {
    lista.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${contato.nome}</h5>
            <p class="mb-1">${contato.telefone}</p>
            <p class="mb-2"><span class="badge bg-secondary">${contato.categoria}</span></p>
            <button class="btn btn-warning btn-sm" data-id="${contato.id}" data-acao="editar">Editar</button>
            <button class="btn btn-danger btn-sm" data-id="${contato.id}" data-acao="excluir">Excluir</button>
          </div>
        </div>
      </div>
    `;
  });
}

document.querySelector("#listaContatos").addEventListener("click", function (event) {
  const id = Number(event.target.dataset.id);

  if (event.target.dataset.acao === "excluir") {
    contatos = contatos.filter(contato => contato.id !== id);
    renderizarContatos();
  }

  if (event.target.dataset.acao === "editar") {
    const contato = contatos.find(contato => contato.id === id);

    document.querySelector("#nomeContato").value = contato.nome;
    document.querySelector("#telefoneContato").value = contato.telefone;
    document.querySelector("#categoriaContato").value = contato.categoria;

    idContatoEmEdicao = id;
    modalContato.show();
  }
});

document.querySelector("#btnSalvarContato").addEventListener("click", function () {
  const nome = document.querySelector("#nomeContato").value;
  const telefone = document.querySelector("#telefoneContato").value;
  const categoria = document.querySelector("#categoriaContato").value;

  if (nome.trim() === "" || telefone.trim() === "") {
    alert("Informe nome e telefone antes de salvar.");
    return;
  }

  if (idContatoEmEdicao === null) {
    contatos.push({ id: Date.now(), nome, telefone, categoria });
  } else {
    const contato = contatos.find(contato => contato.id === idContatoEmEdicao);
    contato.nome = nome;
    contato.telefone = telefone;
    contato.categoria = categoria;
    idContatoEmEdicao = null;
  }

  renderizarContatos();
  formContato.reset();
  modalContato.hide();
});
```

---

## BLOCO 5 — PERSISTÊNCIA

### Exercício 37
```javascript
const cores = ["Azul", "Verde", "Vermelho"];
localStorage.setItem("cores", JSON.stringify(cores));
```

### Exercício 38
```javascript
let coresSalvas = localStorage.getItem("cores");
coresSalvas = coresSalvas ? JSON.parse(coresSalvas) : [];
console.log(coresSalvas);
```

### Exercício 39
Adicione ao código do Exercício 30/32:
```javascript
function salvarProdutos() {
  localStorage.setItem("produtos", JSON.stringify(produtos));
}
```
E chame `salvarProdutos()` logo depois de `produtos.push(...)` no `submit`.

### Exercício 40
```javascript
function carregarProdutos() {
  const dados = localStorage.getItem("produtos");
  if (dados) {
    produtos = JSON.parse(dados);
  }
  renderizarProdutos();
}

carregarProdutos();
```
E chame `salvarProdutos()` também depois do UPDATE e do DELETE.

### Exercício 41 — Tarefas com persistência total
```javascript
let tarefas = [];
let idTarefaEmEdicao = null;

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
  const dados = localStorage.getItem("tarefas");
  if (dados) {
    tarefas = JSON.parse(dados);
  }
  renderizarTarefas();
}

// dentro do listener de excluir:
tarefas = tarefas.filter(tarefa => tarefa.id !== id);
salvarTarefas();
renderizarTarefas();

// dentro do "Salvar" (create ou update), no final, antes de renderizar:
salvarTarefas();
renderizarTarefas();

carregarTarefas(); // chamado uma vez, ao carregar a página
```
*(o restante do CRUD é igual ao do Exercício 34 — a única mudança é chamar `salvarTarefas()` depois de cada criação, edição ou exclusão, e `carregarTarefas()` no lugar de `renderizarTarefas()` na inicialização.)*

### Exercício 42 — Encontre o erro

**Trecho A — problema:** `localStorage` só armazena texto (`string`). Passar o array diretamente faz o JavaScript convertê-lo para a string `"[object Object]"` (ou similar), perdendo os dados.
```javascript
localStorage.setItem("tarefas", JSON.stringify(tarefas));
```

**Trecho B — problema:** se a chave `"tarefas"` nunca foi salva, `getItem()` retorna `null`, e `JSON.parse(null)` retorna `null` — chamar `.forEach()` em `null` gera erro. É preciso tratar esse caso.
```javascript
const dadosSalvos = localStorage.getItem("tarefas");
const tarefas = dadosSalvos ? JSON.parse(dadosSalvos) : [];
tarefas.forEach(tarefa => console.log(tarefa.titulo));
```

**Trecho C — problema:** `tarefa.id = id` é uma **atribuição** (troca o valor de `id`), não uma comparação — o `find()` sempre retornará o primeiro elemento, porque a atribuição sempre é "verdadeira". O correto é usar `===`.
```javascript
const tarefa = tarefas.find(tarefa => tarefa.id === id);
```

---

## BLOCO 6 — CONSUMO DE API COM `fetch`

### Exercício 43
```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(usuarios => console.log(usuarios))
  .catch(erro => console.error(erro));
```

### Exercício 44
```javascript
async function carregarUsuarios() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await response.json();
  console.log(usuarios);
}

carregarUsuarios();
```

### Exercício 45
```javascript
async function carregarUsuarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Erro ao carregar usuários");
    }

    const usuarios = await response.json();
    console.log(usuarios);
  } catch (erro) {
    console.error("Não foi possível carregar os usuários:", erro.message);
  }
}

carregarUsuarios();
```

### Exercício 46
```javascript
async function carregarUsuarios() {
  const mensagem = document.querySelector("#mensagemCarregando");
  const lista = document.querySelector("#listaUsuarios");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Erro ao carregar usuários");
    }

    const usuarios = await response.json();
    mensagem.classList.add("d-none");

    usuarios.forEach(usuario => {
      lista.innerHTML += `
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${usuario.name}</h5>
              <p class="card-text mb-1">${usuario.email}</p>
              <p class="card-text">${usuario.phone}</p>
            </div>
          </div>
        </div>
      `;
    });
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar os usuários.";
  }
}

carregarUsuarios();
```

### Exercício 47
```javascript
document.querySelector("#btnBuscar").addEventListener("click", async function () {
  const id = document.querySelector("#idBusca").value;
  const resultado = document.querySelector("#resultadoBusca");

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error("Usuário não encontrado");
    }

    const usuario = await response.json();

    resultado.innerHTML = `
      <div class="card shadow-sm" style="max-width: 400px;">
        <div class="card-body">
          <h5 class="card-title">${usuario.name}</h5>
          <p class="mb-1">${usuario.email}</p>
          <p>${usuario.address.city}</p>
        </div>
      </div>
    `;
  } catch (erro) {
    resultado.innerHTML = `<p class="text-danger">Usuário não encontrado.</p>`;
  }
});
```

### Exercício 48
```javascript
document.querySelector("#formUsuarioApi").addEventListener("submit", async function (event) {
  event.preventDefault();

  const usuario = {
    name: document.querySelector("#nomeApi").value,
    email: document.querySelector("#emailApi").value,
    phone: document.querySelector("#telefoneApi").value
  };

  const resultado = document.querySelector("#resultadoPost");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });

    const dados = await response.json();

    resultado.innerHTML = `
      <div class="alert alert-success">
        Usuário criado com sucesso! ID gerado pela API: ${dados.id}
      </div>
    `;

    this.reset();
  } catch (erro) {
    resultado.innerHTML = `<div class="alert alert-danger">Erro ao cadastrar usuário.</div>`;
  }
});
```

### Exercício 49
```javascript
async function carregarUsuarios() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await response.json();
  const lista = document.querySelector("#listaUsuariosDelete");

  usuarios.forEach(usuario => {
    lista.innerHTML += `
      <div class="col-md-4" id="usuario-${usuario.id}">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${usuario.name}</h5>
            <p class="card-text">${usuario.email}</p>
            <button class="btn btn-danger btn-sm" data-id="${usuario.id}">Excluir</button>
          </div>
        </div>
      </div>
    `;
  });
}

document.querySelector("#listaUsuariosDelete").addEventListener("click", async function (event) {
  if (event.target.tagName !== "BUTTON") return;

  const id = event.target.dataset.id;

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE"
  });

  if (response.ok) {
    document.querySelector(`#usuario-${id}`).remove();
  }
});

carregarUsuarios();
```

### Exercício 50 — Task Manager (estrutura completa)
```javascript
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
```

---
