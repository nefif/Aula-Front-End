// ==========================================
// 1. ESTADO DA APLICAÇÃO E SELETORES
// ==========================================
let produtos = [];
let idEmEdicao = null;


const formulario = document.querySelector("#formProduto");
const lista = document.querySelector("#listaProdutos");

// ==========================================
// 2. FUNÇÕES DE PERSISTÊNCIA (LOCALSTORAGE)
// ==========================================
function salvarProdutos() {
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

//AQUI FICA A DEFINIÇÃO DA FUNÇÃO
function carregarProdutos() {
  const dados = localStorage.getItem("produtos");
  if (dados) {
    produtos = JSON.parse(dados);
  }
  renderizarProdutos();
}

// ==========================================
// 3. FUNÇÕES DE INTERFACE E MANIPULAÇÃO
// ==========================================
function renderizarProdutos() {
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
            <button onclick="excluirProduto(${produto.id})" class="btn btn-danger btn-sm">Excluir</button>
          </div>
        </div>
      </div>
    `;
  });
}

function excluirProduto(id) {
  produtos = produtos.filter(produto => produto.id !== id);
  
  salvarProdutos();     // Atualiza o localStorage após excluir
  renderizarProdutos(); // Redesenha a tela
  formulario.reset();
}

// ==========================================
// 4. EVENTOS
// ==========================================

// Evento de clique para Editar (Delegação de Eventos)
lista.addEventListener("click", function (event) {
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

// Evento de envio do Formulário (Cadastrar / Atualizar)
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const preco = Number(document.querySelector("#preco").value);
  const categoria = document.querySelector("#categoria").value;
  const estoque = Number(document.querySelector("#estoque").value);

  if (idEmEdicao === null) {
    // CREATE
    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
      categoria,
      estoque
    };
    produtos.push(novoProduto);
  } else {
    // UPDATE
    const produto = produtos.find(produto => produto.id === idEmEdicao);
    produto.nome = nome;
    produto.preco = preco;
    produto.categoria = categoria;
    produto.estoque = estoque;
    
    idEmEdicao = null;
  }

  salvarProdutos();     // Salva as alterações no localStorage
  renderizarProdutos(); // Atualiza a tela
  formulario.reset();   // Limpa o formulário
});

// ==========================================
// 5. INICIALIZAÇÃO DO SISTEMA
// ==========================================
//AQUI FICA A CHAMADA DA FUNÇÃO (Última linha do arquivo)
carregarProdutos();