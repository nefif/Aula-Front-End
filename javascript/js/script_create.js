const produtos = [];

const formulario = document.querySelector("#formProduto"); 

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

    produtos.push(produto);
    //inserir o produto dentro da lista de produtos

    console.log(produtos); 

    formulario.reset();  
});


