# Lista de Exercícios — Arrays, Objetos, CRUD, Persistência e Consumo de API

## Como usar esta lista

- Os exercícios dos **Blocos 1, 2 e 3** trabalham apenas lógica em JavaScript. Podem ser resolvidos no console do navegador ou em um arquivo `.js`/`.html` simples com um `<script>`.
- Os exercícios dos **Blocos 4, 5 e 6** envolvem tela. Para esses, o HTML **já vem pronto e estilizado com Bootstrap** no enunciado — o aluno deve **copiar o HTML exatamente como está** e escrever **somente o JavaScript** dentro (ou junto) da tag `<script>`, seguindo os `id`s indicados.
- Regra geral: **não é permitido alterar os `id`s** fornecidos, pois os exercícios seguintes de cada bloco reaproveitam a mesma tela.

---

## BLOCO 1 — ARRAYS (Exercícios 1 a 8)

### Exercício 1 — Criando e exibindo um array
Crie um array chamado `frutas` contendo três frutas usando `push()` (não escreva os valores direto entre `[ ]`). No final, exiba o array completo no `console.log`.

### Exercício 2 — Tamanho do array
Usando o array `frutas` do exercício anterior, exiba no console:
- a quantidade de frutas usando `.length`;
- uma mensagem `"Existem frutas cadastradas."` somente se o array não estiver vazio.

### Exercício 3 — Lista de compras
Crie um array vazio chamado `listaCompras`. Adicione cinco itens usando `push()`. Depois:
- exiba a lista completa;
- exiba apenas o primeiro item (índice `0`);
- exiba apenas o último item (dica: use `listaCompras.length - 1` como índice).

### Exercício 4 — Removendo o último item
Ainda com `listaCompras`, remova o último item usando `pop()` e exiba a lista antes e depois da remoção, para comparar.

### Exercício 5 — Percorrendo com `forEach()`
Crie um array `numeros` com pelo menos seis números. Utilize `forEach()` para exibir cada número no console precedido do texto `"Número: "`.

### Exercício 6 — Percorrendo com `for...of`
Repita o Exercício 5, mas agora utilizando `for...of` em vez de `forEach()`.

### Exercício 7 — Verificando existência de um valor
Crie um array `nomesCadastrados` com pelo menos cinco nomes. Usando `.includes()`, verifique e exiba no console se os nomes `"Maria"` e `"Pedro"` estão cadastrados (independente de estarem ou não na sua lista).

### Exercício 8 — Desafio: Lista de Tarefas
Crie um array `tarefas` e uma função `adicionarTarefa(tarefa)` que recebe uma tarefa (string) como parâmetro e a adiciona ao array. O programa deve:
1. adicionar cinco tarefas chamando a função;
2. exibir todas as tarefas;
3. exibir a quantidade de tarefas;
4. remover a última tarefa;
5. exibir novamente a quantidade de tarefas.

---

## BLOCO 2 — OBJETOS (Exercícios 9 a 16)

### Exercício 9 — Criando um objeto cliente
Crie um objeto `cliente` com as propriedades `nome`, `email`, `telefone` e `cidade`. Exiba no console apenas o `nome` e o `email` (usando `cliente.nome` e `cliente.email`, e não o objeto inteiro).

### Exercício 10 — Alterando propriedades
Usando o objeto `cliente` do exercício anterior, altere o valor de `cidade` para outra cidade e exiba o objeto completo antes e depois da alteração.

### Exercício 11 — Adicionando uma nova propriedade
Ainda com o objeto `cliente`, adicione uma nova propriedade `idade` (que não existia antes) e exiba o objeto completo para confirmar que a propriedade foi criada.

### Exercício 12 — Objeto com array dentro
Crie um objeto `produto` com `nome` e `preco`, e uma propriedade `categorias` que seja um **array** com pelo menos duas categorias (ex.: `"Informática"`, `"Eletrônicos"`). Exiba no console o nome do produto e a primeira categoria (`produto.categorias[0]`).

### Exercício 13 — Objeto com objeto dentro
Crie um objeto `cliente` com `nome` e uma propriedade `endereco` que seja **outro objeto**, contendo `cidade` e `estado`. Exiba no console uma frase montada assim: `"Maria mora em Recife - PE"` (usando os valores do objeto, não digitando a frase pronta).

### Exercício 14 — Função que recebe um objeto
Crie um objeto `produto` com `nome`, `preco` e `estoque`. Crie uma função `exibirProduto(produto)` que recebe um produto e mostra seus dados formatados no console. Chame a função passando o objeto criado.

### Exercício 15 — Método dentro do objeto
Crie um objeto `pessoa` com a propriedade `nome` e um método `apresentar()` que exibe no console: `"Olá, eu sou "` seguido do nome (usando `this.nome`). Chame o método.

### Exercício 16 — Desafio: Objeto Produto completo
Crie um objeto `produto` com as propriedades: `id`, `nome`, `categoria`, `preco`, `estoque` e `disponivel` (booleano). Depois, na sequência:
1. exiba o `nome` e o `preco`;
2. altere o `preco` para um novo valor;
3. diminua o `estoque` em 1 unidade;
4. altere `disponivel` para o valor contrário do atual (`true`/`false`);
5. crie a função `exibirProduto()` mencionada no Exercício 14 e use-a para mostrar o resultado final.

---

## BLOCO 3 — ARRAY DE OBJETOS + MÉTODOS (Exercícios 17 a 26)

Use como base este array em todos os exercícios do bloco, salvo indicação contrária:

```javascript
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, categoria: "Informática", estoque: 5 },
  { id: 2, nome: "Mouse",    preco: 100,  categoria: "Informática", estoque: 20 },
  { id: 3, nome: "Teclado",  preco: 250,  categoria: "Informática", estoque: 0 },
  { id: 4, nome: "Monitor",  preco: 1200, categoria: "Informática", estoque: 8 },
  { id: 5, nome: "Cadeira",  preco: 800,  categoria: "Móveis",      estoque: 3 }
];
```

### Exercício 17 — Acessando um item do array de objetos
Exiba no console o nome do produto na posição `0` e o preço do produto na posição `2`, usando `produtos[0].nome` e `produtos[2].preco`.

### Exercício 18 — `forEach` em array de objetos
Percorra `produtos` com `forEach()` e exiba, para cada um, uma linha no formato: `"Notebook - R$ 3500"`.

### Exercício 19 — `map()`: lista de nomes
Utilize `map()` para criar um novo array chamado `nomesProdutos`, contendo apenas os nomes dos produtos. Exiba o resultado.

### Exercício 20 — `map()`: aplicando desconto
Utilize `map()` para criar um novo array de objetos `produtosComDesconto`, onde cada produto tem o mesmo `nome`, mas o `preco` com 10% de desconto. **Importante:** o array `produtos` original não deve ser alterado.

### Exercício 21 — `filter()`: produtos acima de um valor
Utilize `filter()` para criar um array `produtosCaros`, contendo apenas os produtos com `preco` maior que R$ 500. Exiba o resultado.

### Exercício 22 — `filter()`: produtos sem estoque
Utilize `filter()` para criar um array `semEstoque`, contendo apenas os produtos com `estoque` igual a `0`.

### Exercício 23 — `find()`: buscando por id
Utilize `find()` para localizar o produto com `id` igual a `3` e exiba apenas o `nome` desse produto.

### Exercício 24 — `some()`: existe ou não existe
Utilize `some()` para verificar se existe pelo menos um produto da categoria `"Móveis"` e outro para verificar se existe algum produto com `estoque` igual a `0`. Exiba os dois resultados (`true`/`false`) no console.

### Exercício 25 — `reduce()`: somando valores
Utilize `reduce()` para calcular a soma de todos os `preco` do array `produtos`, guardando o resultado em uma variável `valorTotalEstoque`. Exiba o valor total.

### Exercício 26 — Desafio: Consultando Produtos
Usando o mesmo array `produtos`, responda com código (um `console.log` para cada resposta):
1. Quais são todos os nomes dos produtos?
2. Quais produtos custam mais de R$ 500?
3. Qual produto tem o `id` igual a `3`?
4. Existe algum produto chamado `"Mouse"`?
5. Crie um array contendo apenas os preços de todos os produtos.
6. Existe algum produto sem estoque?

---

## BLOCO 4 — CRUD NO FRONT-END (Exercícios 27 a 36)

> A partir daqui, **copie o HTML fornecido exatamente como está** e escreva apenas o JavaScript dentro da tag `<script>` no final do arquivo (ou em um arquivo `.js` separado, se preferir, desde que o `<script>` seja ajustado para importá-lo).

### Exercício 27 — CREATE: capturando o formulário
Copie o HTML abaixo. Implemente o JavaScript para que, ao enviar o formulário: o comportamento padrão seja bloqueado (`event.preventDefault()`), os dados dos campos sejam capturados, um objeto `produto` seja montado (com `id: Date.now()`) e adicionado a um array `produtos = []` com `push()`. Ao final, exiba `produtos` no console e limpe o formulário com `.reset()`.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro de Produtos</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <h1 class="mb-4">Cadastro de Produtos</h1>
    <form id="formProduto" class="row g-2 mb-4">
      <div class="col-md-4">
        <input type="text" id="nome" class="form-control" placeholder="Nome" required>
      </div>
      <div class="col-md-2">
        <input type="number" id="preco" class="form-control" placeholder="Preço" required>
      </div>
      <div class="col-md-3">
        <input type="text" id="categoria" class="form-control" placeholder="Categoria" required>
      </div>
      <div class="col-md-2">
        <input type="number" id="estoque" class="form-control" placeholder="Estoque" required>
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100">Salvar</button>
      </div>
    </form>
    <hr>
    <div id="listaProdutos" class="row g-3"></div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

### Exercício 28 — READ: exibindo os produtos
Continue a partir do Exercício 27. Crie a função `renderizarProdutos()` que percorre o array `produtos` e insere, dentro de `#listaProdutos`, um `card` do Bootstrap para cada produto, mostrando nome, categoria, preço e estoque. Chame essa função **sempre depois de cadastrar** um novo produto.

### Exercício 29 — CREATE + READ integrados
Junte os Exercícios 27 e 28 em um único fluxo: ao cadastrar um produto, ele deve aparecer imediatamente na tela, sem precisar recarregar a página, e o formulário deve ser limpo automaticamente.

### Exercício 30 — DELETE
Adicione, dentro de cada card renderizado por `renderizarProdutos()`, um botão **"Excluir"**. Ao clicar, o produto correspondente deve ser removido do array `produtos` (usando `filter()` pelo `id`) e a tela deve ser atualizada chamando `renderizarProdutos()` novamente.

### Exercício 31 — UPDATE (parte 1): preenchendo o formulário
Adicione um botão **"Editar"** em cada card. Ao clicar, o sistema deve localizar o produto pelo `id` (usando `find()`) e preencher os campos do formulário com os dados desse produto, para que o usuário possa alterá-los.

### Exercício 32 — UPDATE (parte 2): salvando a edição
Complete o Exercício 31 criando uma variável de controle `idEmEdicao = null`. Ao clicar em "Editar", guarde o `id` do produto nessa variável. No envio do formulário, verifique: se `idEmEdicao` for `null`, é um **CREATE** (cadastra um novo); se não for `null`, é um **UPDATE** (localiza o produto com `find()` e atualiza suas propriedades). Ao final do UPDATE, volte `idEmEdicao` para `null` e limpe o formulário.

### Exercício 33 — CRUD de Clientes
Copie o HTML abaixo (baseado em uma tela de cadastro de clientes) e implemente o CRUD completo: **CREATE** (cadastrar um cliente novo através do formulário no topo), **READ** (listar na tabela) e **DELETE** (botão "Excluir" em cada linha). O UPDATE é opcional neste exercício.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro de Clientes</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <h1 class="mb-4">Clientes</h1>

    <form id="formCliente" class="row g-2 mb-4">
      <div class="col-md-3">
        <input type="text" id="nomeCliente" class="form-control" placeholder="Nome" required>
      </div>
      <div class="col-md-3">
        <input type="email" id="emailCliente" class="form-control" placeholder="Email" required>
      </div>
      <div class="col-md-3">
        <input type="tel" id="telefoneCliente" class="form-control" placeholder="Telefone" required>
      </div>
      <div class="col-md-2">
        <input type="text" id="cidadeCliente" class="form-control" placeholder="Cidade" required>
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100">+</button>
      </div>
    </form>

    <table class="table table-striped table-hover bg-white shadow-sm">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Cidade</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody id="corpoTabelaClientes"></tbody>
    </table>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

### Exercício 34 — CRUD de Tarefas
Copie o HTML abaixo (baseado em uma tela de gestão de tarefas) e implemente o CRUD completo: **CREATE**, **READ**, **UPDATE** e **DELETE**. Dica: use `find()` para localizar a tarefa ao editar e `filter()` para excluir.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestão de Tarefas</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="mb-0">Tarefas</h1>
      <button type="button" class="btn btn-primary" id="btnAbrirModalTarefa" data-bs-toggle="modal" data-bs-target="#modalTarefa">
        + Nova Tarefa
      </button>
    </div>

    <div id="listaTarefas" class="row g-3"></div>
  </div>

  <div class="modal fade" id="modalTarefa" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTarefaLabel">Nova Tarefa</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form id="formTarefa">
            <div class="mb-3">
              <label class="form-label">Título</label>
              <input type="text" id="tituloTarefa" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Descrição</label>
              <textarea id="descricaoTarefa" class="form-control" rows="2"></textarea>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Prioridade</label>
                <select id="prioridadeTarefa" class="form-select">
                  <option value="Baixa">Baixa</option>
                  <option value="Média">Média</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Status</label>
                <select id="statusTarefa" class="form-select">
                  <option value="Pendente">Pendente</option>
                  <option value="Em andamento">Em andamento</option>
                  <option value="Concluída">Concluída</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" id="btnSalvarTarefa">Salvar</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

### Exercício 35 — CRUD de Livros
Copie o HTML abaixo (catálogo de livros de uma biblioteca) e implemente o CRUD completo (**CREATE**, **READ**, **UPDATE**, **DELETE**).

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catálogo de Livros</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <h1 class="mb-4">Catálogo de Livros</h1>

    <form id="formLivro" class="row g-2 mb-4">
      <div class="col-md-4">
        <input type="text" id="tituloLivro" class="form-control" placeholder="Título" required>
      </div>
      <div class="col-md-3">
        <input type="text" id="autorLivro" class="form-control" placeholder="Autor" required>
      </div>
      <div class="col-md-2">
        <input type="number" id="anoLivro" class="form-control" placeholder="Ano" required>
      </div>
      <div class="col-md-2">
        <select id="disponivelLivro" class="form-select">
          <option value="true">Disponível</option>
          <option value="false">Emprestado</option>
        </select>
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100">+</button>
      </div>
    </form>

    <table class="table table-striped table-hover bg-white shadow-sm">
      <thead class="table-dark">
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Ano</th>
          <th>Status</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody id="corpoTabelaLivros"></tbody>
    </table>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

### Exercício 36 — Desafio Final CRUD: Agenda de Contatos
Copie o HTML abaixo e implemente o CRUD completo de contatos. Além do CREATE, READ, UPDATE e DELETE, adicione uma **validação**: não deve ser possível cadastrar um contato sem nome ou sem telefone (exiba um `alert()` avisando o usuário nesse caso).

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agenda de Contatos</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="mb-0">Agenda de Contatos</h1>
      <button type="button" class="btn btn-primary" id="btnAbrirModalContato" data-bs-toggle="modal" data-bs-target="#modalContato">
        + Novo Contato
      </button>
    </div>
    <div id="listaContatos" class="row g-3"></div>
  </div>

  <div class="modal fade" id="modalContato" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalContatoLabel">Novo Contato</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form id="formContato">
            <div class="mb-3">
              <label class="form-label">Nome</label>
              <input type="text" id="nomeContato" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Telefone</label>
              <input type="tel" id="telefoneContato" class="form-control">
            </div>
            <div class="mb-3">
              <label class="form-label">Categoria</label>
              <select id="categoriaContato" class="form-select">
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Família">Família</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" id="btnSalvarContato">Salvar</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

---

## BLOCO 5 — PERSISTÊNCIA COM `localStorage` (Exercícios 37 a 42)

### Exercício 37 — Salvando um array simples
Crie um array `cores = ["Azul", "Verde", "Vermelho"]`. Salve esse array no `localStorage` na chave `"cores"`, lembrando de convertê-lo para texto com `JSON.stringify()`. Confira no navegador (aba Application/Armazenamento) se o valor foi salvo.

### Exercício 38 — Recuperando do `localStorage`
Recupere o valor salvo na chave `"cores"` do exercício anterior usando `localStorage.getItem()` e `JSON.parse()`. Trate o caso em que a chave não exista (o retorno será `null`): nesse caso, a variável deve começar como um array vazio `[]`.

### Exercício 39 — Persistindo o cadastro de produtos
Volte ao CRUD de Produtos do Exercício 30. Crie uma função `salvarProdutos()` que salva o array `produtos` no `localStorage`. Chame essa função sempre depois de **criar** um novo produto.

### Exercício 40 — Carregando os dados ao abrir a página
Complete o exercício anterior criando uma função `carregarProdutos()` que recupera os produtos do `localStorage` (se existirem) e chama `renderizarProdutos()`. Essa função deve ser executada automaticamente quando a página é carregada.

### Exercício 41 — CRUD de Tarefas com persistência total
Volte ao CRUD de Tarefas do Exercício 34. Adicione o salvamento no `localStorage` depois de **cada** operação (CREATE, UPDATE e DELETE) e o carregamento automático ao abrir a página. Teste: cadastre três tarefas, recarregue a página e confirme que elas continuam lá; edite uma, recarregue e confirme; exclua uma, recarregue e confirme que foi removida.

### Exercício 42 — Encontre o erro
Cada trecho abaixo tem um problema relacionado a `localStorage` ou a comparação de valores. Explique com suas palavras qual é o erro em cada um e reescreva o código corrigido.

**Trecho A:**
```javascript
localStorage.setItem("tarefas", tarefas);
```

**Trecho B:**
```javascript
const tarefas = JSON.parse(localStorage.getItem("tarefas"));
tarefas.forEach(tarefa => console.log(tarefa.titulo));
```

**Trecho C:**
```javascript
const tarefa = tarefas.find(tarefa => tarefa.id = id);
```

---

## BLOCO 6 — CONSUMO DE API COM `fetch` (Exercícios 43 a 50)

> Todos os exercícios deste bloco usam a API pública gratuita de testes `https://jsonplaceholder.typicode.com`.

### Exercício 43 — Primeira requisição com `.then()`
Faça uma requisição para `https://jsonplaceholder.typicode.com/users` usando `fetch()` com `.then()`/`.catch()`. Exiba a lista completa de usuários no console.

### Exercício 44 — A mesma requisição com `async/await`
Repita o Exercício 43, agora dentro de uma função `async function carregarUsuarios() { ... }`, usando `await` no lugar do `.then()`.

### Exercício 45 — Tratando erros
Melhore a função `carregarUsuarios()` do exercício anterior envolvendo o código em um `try/catch` e verificando `response.ok` antes de continuar. Se a resposta não for `ok`, lance um erro com `throw new Error(...)` e capture-o no `catch`, exibindo uma mensagem amigável no console.

### Exercício 46 — Renderizando usuários na tela
Copie o HTML abaixo. Implemente `carregarUsuarios()` para buscar os usuários da API e exibir, para cada um, um `card` do Bootstrap dentro de `#listaUsuarios`, mostrando nome, email e telefone. Chame a função automaticamente ao abrir a página.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Usuários (API)</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <h1 class="mb-4">Usuários</h1>
    <div id="mensagemCarregando" class="text-muted">Carregando usuários...</div>
    <div id="listaUsuarios" class="row g-3"></div>
  </div>

  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

### Exercício 47 — Buscando por um recurso específico
Copie o HTML abaixo. Ao digitar um `id` de 1 a 10 e clicar em "Buscar", faça uma requisição para `https://jsonplaceholder.typicode.com/users/{id}` (substituindo `{id}` pelo valor digitado) e exiba o nome, email e cidade (`address.city`) do usuário encontrado dentro de `#resultadoBusca`. Se o `id` não existir, exiba uma mensagem de erro amigável.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buscar Usuário</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <h1 class="mb-4">Buscar Usuário por ID</h1>
    <div class="input-group mb-4" style="max-width: 400px;">
      <input type="number" id="idBusca" class="form-control" placeholder="Digite o ID (1 a 10)">
      <button class="btn btn-primary" id="btnBuscar">Buscar</button>
    </div>
    <div id="resultadoBusca"></div>
  </div>

  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

### Exercício 48 — POST: criando um usuário
Copie o HTML abaixo. Ao enviar o formulário, monte um objeto com os dados digitados e envie via `fetch()` com `method: "POST"` para `https://jsonplaceholder.typicode.com/users`, com o `header` `"Content-Type": "application/json"` e o `body` convertido com `JSON.stringify()`. Exiba a resposta da API (incluindo o `id` gerado) dentro de `#resultadoPost`.

> Observação para explicar aos alunos: como essa API é apenas de testes, ela **simula** a criação, mas não guarda o dado de fato — por isso ele não vai aparecer depois em uma busca por `GET`.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastrar Usuário (API)</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <h1 class="mb-4">Cadastrar Usuário</h1>
    <form id="formUsuarioApi" class="row g-2 mb-4">
      <div class="col-md-4">
        <input type="text" id="nomeApi" class="form-control" placeholder="Nome" required>
      </div>
      <div class="col-md-4">
        <input type="email" id="emailApi" class="form-control" placeholder="Email" required>
      </div>
      <div class="col-md-3">
        <input type="text" id="telefoneApi" class="form-control" placeholder="Telefone" required>
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100">Enviar</button>
      </div>
    </form>
    <div id="resultadoPost"></div>
  </div>

  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

### Exercício 49 — DELETE via API
Copie o HTML abaixo. Ao clicar em "Excluir" ao lado de um usuário, faça uma requisição `fetch()` com `method: "DELETE"` para `https://jsonplaceholder.typicode.com/users/{id}`. Se `response.ok`, remova o card correspondente da tela (sem precisar recarregar a lista da API).

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Usuários (API) - Excluir</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <h1 class="mb-4">Usuários</h1>
    <div id="listaUsuariosDelete" class="row g-3"></div>
  </div>

  <script>
    // escreva seu JavaScript aqui
    // dica: ao renderizar cada usuário, inclua um botão com
    // um atributo, por exemplo: data-id="${usuario.id}"
    // para saber qual usuário excluir ao clicar
  </script>
</body>
</html>
```

### Exercício 50 — Desafio Final: Mini Task Manager com API + CRUD + Persistência
Copie o HTML abaixo. Este é o exercício mais completo da lista — ele reúne **tudo** o que foi estudado nesta aula. Implemente:

1. **CRUD local completo de tarefas** (título, prioridade, status) usando um array de objetos, com CREATE, READ, UPDATE e DELETE (semelhante ao Exercício 34).
2. **Persistência**: toda alteração deve ser salva no `localStorage`, e os dados devem ser carregados automaticamente ao abrir a página.
3. **Filtro**: os botões "Todas", "Pendentes", "Em andamento" e "Concluídas" devem filtrar a lista exibida usando `filter()`.
4. **Contadores**: exiba o total de tarefas e quantas estão em cada status, calculados com `filter().length`.
5. **Botão "Carregar tarefas de exemplo"**: ao clicar, faça uma requisição `fetch()` para `https://jsonplaceholder.typicode.com/todos?_limit=5`, transforme cada item recebido em uma tarefa do seu formato (`titulo`, `prioridade`, `status`) e adicione ao array de tarefas, salvando no `localStorage` e atualizando a tela.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1 class="mb-0">Task Manager</h1>
      <div>
        <button class="btn btn-outline-secondary" id="btnCarregarExemplo">Carregar tarefas de exemplo</button>
        <button type="button" class="btn btn-primary" id="btnAbrirModalTarefaTM" data-bs-toggle="modal" data-bs-target="#modalTarefaTM">
          + Nova Tarefa
        </button>
      </div>
    </div>

    <div class="row text-center mb-4 g-2">
      <div class="col-3">
        <div class="card p-2"><small class="text-muted">Total</small><div id="contTotal" class="fs-4">0</div></div>
      </div>
      <div class="col-3">
        <div class="card p-2"><small class="text-muted">Pendentes</small><div id="contPendentes" class="fs-4">0</div></div>
      </div>
      <div class="col-3">
        <div class="card p-2"><small class="text-muted">Em andamento</small><div id="contAndamento" class="fs-4">0</div></div>
      </div>
      <div class="col-3">
        <div class="card p-2"><small class="text-muted">Concluídas</small><div id="contConcluidas" class="fs-4">0</div></div>
      </div>
    </div>

    <div class="btn-group mb-4" id="filtrosTarefaTM">
      <button class="btn btn-outline-primary active" data-filtro="todos">Todas</button>
      <button class="btn btn-outline-primary" data-filtro="Pendente">Pendentes</button>
      <button class="btn btn-outline-primary" data-filtro="Em andamento">Em andamento</button>
      <button class="btn btn-outline-primary" data-filtro="Concluída">Concluídas</button>
    </div>

    <div id="listaTarefasTM" class="row g-3"></div>
  </div>

  <div class="modal fade" id="modalTarefaTM" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTarefaTMLabel">Nova Tarefa</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form id="formTarefaTM">
            <div class="mb-3">
              <label class="form-label">Título</label>
              <input type="text" id="tituloTarefaTM" class="form-control" required>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Prioridade</label>
                <select id="prioridadeTarefaTM" class="form-select">
                  <option value="Baixa">Baixa</option>
                  <option value="Média">Média</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Status</label>
                <select id="statusTarefaTM" class="form-select">
                  <option value="Pendente">Pendente</option>
                  <option value="Em andamento">Em andamento</option>
                  <option value="Concluída">Concluída</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" id="btnSalvarTarefaTM">Salvar</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // escreva seu JavaScript aqui
  </script>
</body>
</html>
```

---

## Gabarito de acompanhamento (para o instrutor)

| Bloco | Exercícios | Conceitos principais |
|---|---|---|
| 1 — Arrays | 1 a 8 | criação, `.length`, `push`, `pop`, `forEach`, `for...of`, `includes` |
| 2 — Objetos | 9 a 16 | criação, acesso, alteração, propriedades novas, objeto dentro de objeto, métodos (`this`) |
| 3 — Array de Objetos | 17 a 26 | acesso combinado, `map`, `filter`, `find`, `some`, `reduce` |
| 4 — CRUD | 27 a 36 | formulário + DOM, `push`, `filter` (delete), `find` (update), padrão create-ou-update |
| 5 — Persistência | 37 a 42 | `localStorage`, `JSON.stringify`/`JSON.parse`, tratamento de `null`, debugging |
| 6 — API | 43 a 50 | `fetch`, `.then`/`.catch`, `async/await`, `try/catch`, GET/POST/DELETE, integração final |

**Sugestão de uso em sala:** os Blocos 1 a 3 podem ser trabalhados em ritmo mais rápido (fixação individual), reservando mais tempo de prática guiada e correção coletiva para os Blocos 4, 5 e 6, que exigem integrar vários conceitos ao mesmo tempo.
