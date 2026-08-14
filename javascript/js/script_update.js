let produtos = [];
let idEmEdicao = null;

const formulario = document.querySelector("#formProduto"); 

function excluirProduto(id) { 
    produtos = produtos.filter(produto => { 
        return produto.id !== id; 
    }); 
    renderizarProdutos(); 
    formulario.reset();
    console.log(produtos)
}

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
            <button onclick="excluirProduto(${produto.id})" class="btn btn-danger btn-sm" > Excluir </button>
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

formulario.addEventListener("submit", function(event) { 
    event.preventDefault(); 
    // previne que o formulario reinicie toda vez que o evento acontecer

    const nome = document.querySelector("#nome").value; 
    const preco = document.querySelector("#preco").value; 
    const categoria = document.querySelector("#categoria").value; 
    const estoque = document.querySelector("#estoque").value;
    
    const produto = { 
        id: Date.now(), 
        nome: nome, 
        preco: Number(preco), 
        categoria: categoria, 
        estoque: Number(estoque) 
    };

    if(idEmEdicao === null){
    produtos.push(produto);
    //inserir o produto dentro da lista de produtos
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

    console.log(produtos); 

    formulario.reset();  
});


