let produtos = []

const formulario = document.querySelector('#formProduto')

function excluirProduto(id) {
    produtos = produtos.filter(produto => {
        return produto.id !== id;
    });
    renderizarProdutos();
    console.log(produtos);
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
            <button onclick="excluirProduto(${produto.id})" class="btn btn-danger"> Excluir</button> 
          </div>
        </div>
      </div>
    `;
  });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const preco = document.querySelector('#preco').value;
    const categoria = document.querySelector('#categoria').value;
    const estoque = document.querySelector('#estoque').value;
    
    const produto = {
        id: Date.now(),
        nome: nome,
        preco: Number(preco),
        categoria: categoria,
        estoque: Number(estoque)
    }

    produtos.push(produto)
    
    renderizarProdutos();

    console.log('formulario enviado');
    console.log(produtos);
    formulario.reset()
});

