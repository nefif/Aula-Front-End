// Exercício 46: Integração da API com a Interface
async function carregarUsuarios() {
  const mensagem = document.querySelector("#mensagemCarregando");
  const lista = document.querySelector("#listaUsuarios");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Erro na API");

    const usuarios = await response.json();
    mensagem.classList.add("d-none"); // Esconde o aviso de carregamento

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
        </div>`;
    });
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar os usuários.";
  }
}

carregarUsuarios();