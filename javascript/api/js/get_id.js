// Exercício 47: Busca parametrizada
document.querySelector("#btnBuscar").addEventListener("click", async function () {
  const id = document.querySelector("#idBusca").value;
  const resultado = document.querySelector("#resultadoBusca");

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error("Usuário não encontrado");

    const usuario = await response.json();
    console.log(usuario)
    resultado.innerHTML = `
      <div class="card shadow-sm" style="max-width: 400px;">
        <div class="card-body">
          <h5 class="card-title">${usuario.name}</h5>
          <p class="mb-1">${usuario.email}</p>
          <p>${usuario.address.city}</p>
        </div>
      </div>`;
  } catch (erro) {
    resultado.innerHTML = `<p class="text-danger">Usuário não encontrado.</p>`;
  }
});