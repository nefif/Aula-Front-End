# Lista de Exercícios — Fundamentos do JavaScript + DOM + Eventos
### Transformando HTML em Sistemas

> **Observação para o(a) aluno(a):** nesta lista você vai praticar apenas **lógica de programação em JavaScript**, **manipulação do DOM** e **eventos**. Os exercícios que envolvem HTML/CSS já vêm com a estrutura pronta usando **Bootstrap** — você não precisa escrever nem uma linha de HTML ou CSS, só o JavaScript. Assuntos como Arrays, Objetos, CRUD, persistência de dados (localStorage) e consumo de API **não fazem parte desta lista** — eles serão trabalhados em aulas futuras.
>
> Sempre que o exercício pedir HTML, copie o código fornecido em um arquivo `.html`, salve o JavaScript em um arquivo `script.js` na mesma pasta e conecte os dois com `<script src="script.js"></script>` antes do fechamento da tag `</body>`.

---

## Bloco 1 — Variáveis, Tipos de Dados e Operadores (questões 1 a 8)

**1.** Crie duas variáveis, `nome` e `idade`, usando `let`, e exiba no console uma frase dizendo o nome e a idade da pessoa, usando template string (crase `` ` ``).

**2.** Explique com suas palavras a diferença entre `var`, `let` e `const`. Depois, escreva um trecho de código em que o uso de `const` causaria um erro se a variável fosse reatribuída, e mostre esse erro.

**3.** Use o operador `typeof` para descobrir e exibir no console o tipo de cada um destes valores: `"10"`, `10`, `true`, `undefined`, `null`.

**4.** Escreva expressões em JavaScript que calculem: soma, subtração, multiplicação, divisão e resto (módulo) entre os números 17 e 4. Exiba cada resultado no console com uma frase explicando o que foi calculado.

**5.** Qual é a diferença entre `==` e `===`? Escreva no console três comparações que demonstrem essa diferença (ex.: comparando `"5"` com `5`).

**6.** Crie uma variável `precoProduto` com o valor `49.9` e uma variável `quantidade` com o valor `3`. Calcule o valor total da compra e exiba no console: `"O total da compra é: R$ 149.70"`.

**7.** Use os operadores de incremento (`++`) e decremento (`--`) para, a partir de uma variável `contador = 10`, exibir no console o valor antes e depois de cada operação.

**8.** Escreva um código que converta a string `"25"` em número usando `Number()` e a string `"3.5"` usando `parseFloat()`. Some os dois valores convertidos e exiba o resultado.

---

## Bloco 2 — Estruturas Condicionais (questões 9 a 15)

**9.** Escreva um programa que receba a idade de uma pessoa (pode ser um valor fixo em uma variável) e exiba no console `"Maior de idade"` se for igual ou maior que 18, ou `"Menor de idade"` caso contrário.

**10.** Crie uma variável `nota` com um valor entre 0 e 10. Usando `if / else if / else`, exiba o conceito correspondente: nota >= 9 → `"Excelente"`; nota >= 7 → `"Bom"`; nota >= 5 → `"Regular"`; abaixo disso → `"Insuficiente"`.

**11.** Use o operador ternário para verificar se um número guardado em uma variável é par ou ímpar, exibindo o resultado no console.

**12.** Escreva um `switch` que receba o número de um mês (1 a 12) e exiba no console o nome do mês correspondente. Trate também o caso de um número inválido usando `default`.

**13.** Crie três variáveis representando as notas de um aluno em três provas. Use operadores lógicos (`&&`, `||`) para verificar se o aluno foi aprovado (média das notas maior ou igual a 6 **e** nenhuma nota individual menor que 4).

**14.** Escreva uma função `verificarTriangulo(a, b, c)` que receba três lados e exiba no console se eles formam um triângulo válido (a soma de quaisquer dois lados deve ser maior que o terceiro lado).

**15.** Crie uma variável `senha` e outra `confirmacaoSenha`. Verifique se são iguais e se possuem pelo menos 6 caracteres (use a propriedade `.length`), exibindo mensagens apropriadas para cada situação.

---

## Bloco 3 — Estruturas de Repetição (questões 16 a 22)

**16.** Use um laço `for` para exibir no console os números de 1 a 20.

**17.** Use um laço `for` para exibir apenas os números pares entre 1 e 50.

**18.** Escreva um laço `while` que exiba uma contagem regressiva de 10 até 0.

**19.** Use um laço `for` para calcular e exibir a soma de todos os números de 1 até 100.

**20.** Escreva um programa que use `for` para calcular o fatorial de um número guardado em uma variável (ex.: fatorial de 5 = 5×4×3×2×1).

**21.** Use um laço `do...while` para simular uma "senha secreta": enquanto o valor de uma variável `tentativa` for diferente de um valor fixo definido por você, exiba `"Tentativa incorreta"` no console (para não travar o exercício, simule as tentativas incrementando a variável dentro do próprio laço).

**22.** Escreva um laço `for` que percorra os números de 1 a 30 e exiba no console `"Fizz"` se o número for divisível por 3, `"Buzz"` se for divisível por 5, `"FizzBuzz"` se for divisível por ambos, e o próprio número caso contrário.

---

## Bloco 4 — Funções (questões 23 a 28)

**23.** Crie uma função chamada `saudacao` que receba um nome como parâmetro e retorne a frase `"Olá, [nome]! Bem-vindo(a)."`. Chame a função e exiba o retorno no console.

**24.** Escreva uma função `calcularAreaRetangulo(largura, altura)` que retorne a área do retângulo. Teste a função com pelo menos dois pares de valores diferentes.

**25.** Reescreva a função do exercício anterior usando **arrow function**. Explique com suas palavras uma diferença entre função tradicional e arrow function.

**26.** Crie uma função `ehMaiorDeIdade(idade)` que retorne `true` ou `false`. Use essa função dentro de um `if` para exibir uma mensagem apropriada no console.

**27.** Escreva uma função `calcularMedia` que receba três notas como parâmetros e retorne a média. Depois, escreva outra função `situacaoAluno` que receba essa média e retorne `"Aprovado"` ou `"Reprovado"`. Utilize as duas funções em conjunto.

**28.** Explique a diferença entre parâmetro e argumento em uma função. Escreva uma função com um **parâmetro padrão (default)** e demonstre, com dois exemplos de chamada, o que acontece quando o argumento é informado e quando não é.

---

## Bloco 5 — Introdução ao DOM: Selecionando Elementos (questões 29 a 34)

Para os exercícios deste bloco, utilize a seguinte estrutura HTML como base (crie o arquivo `index.html` com este conteúdo antes de resolver):

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercícios DOM</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h1 id="titulo" class="text-primary">Painel de Boas-Vindas</h1>
    <p class="lead">Bem-vindo(a) ao sistema de testes do DOM.</p>

    <ul id="lista-frutas" class="list-group mb-4">
      <li class="list-group-item">Maçã</li>
      <li class="list-group-item">Banana</li>
      <li class="list-group-item">Uva</li>
    </ul>

    <img id="imagem-usuario" src="https://via.placeholder.com/150" alt="Imagem do usuário" class="rounded mb-3">

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id="card-titulo">Título do Card</h5>
        <p class="card-text" id="card-texto">Texto de exemplo dentro do card.</p>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

**29.** Usando `document.getElementById`, selecione o elemento `#titulo` e exiba no console o seu conteúdo de texto (`textContent`).

**30.** Usando `document.querySelector`, selecione o parágrafo com a classe `.lead` e exiba no console o seu conteúdo.

**31.** Usando `document.querySelectorAll`, selecione todos os itens da lista (`li` dentro de `#lista-frutas`) e, com um laço `for`, exiba no console o texto de cada item.

**32.** Selecione o elemento `#card-titulo` e o elemento `#card-texto` e exiba no console os textos de ambos, concatenados em uma única frase.

**33.** Selecione a imagem `#imagem-usuario` e exiba no console o valor atual do seu atributo `src` e do seu atributo `alt`.

**34.** Conte, usando JavaScript, quantos itens (`li`) existem dentro da lista `#lista-frutas` e exiba a quantidade no console (dica: use a propriedade `.length` do resultado de `querySelectorAll`).

---

## Bloco 6 — Manipulando o DOM: Conteúdo, Atributos e Estilo (questões 35 a 42)

Utilize o **mesmo HTML do Bloco 5** para os exercícios a seguir.

**35.** Altere o conteúdo de texto do elemento `#titulo` para `"Painel Atualizado!"` usando `textContent`.

**36.** Altere o conteúdo do elemento `#card-texto` para uma nova frase de sua escolha, mas desta vez usando `innerHTML`, incluindo uma palavra em `<strong>` dentro do texto.

**37.** Altere o atributo `src` da imagem `#imagem-usuario` para outra URL de imagem de sua escolha, usando `setAttribute`.

**38.** Usando a propriedade `.style`, altere a cor de fundo (`backgroundColor`) do elemento `#titulo` para uma cor de sua escolha, e a cor do texto (`color`) para branco.

**39.** Usando `classList.add` e `classList.remove`, remova a classe `text-primary` do `#titulo` e adicione a classe `text-danger` no lugar (ambas classes de cor de texto do Bootstrap).

**40.** Crie um novo elemento `<li>` usando `document.createElement`, defina seu texto como `"Morango"`, adicione a classe `list-group-item` a ele e insira-o dentro da lista `#lista-frutas` usando `appendChild`.

**41.** Selecione o primeiro item (`li`) da lista `#lista-frutas` e remova-o do DOM usando `.remove()`.

**42.** Usando `classList.toggle`, escreva um código que, ao ser executado, alterne a classe `d-none` (classe do Bootstrap que esconde elementos) no elemento `#card-titulo` — ou seja, se ele estiver visível, esconda; se estiver escondido, mostre.

---

## Bloco 7 — Eventos (questões 43 a 50)

Para os exercícios deste bloco, utilize a seguinte estrutura HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercícios de Eventos</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5" style="max-width: 500px;">
    <h1 class="mb-4">Formulário de Cadastro</h1>

    <button id="btn-clicar" class="btn btn-primary mb-3">Clique aqui</button>
    <p id="resultado-clique" class="fw-bold"></p>

    <div class="mb-3">
      <label for="campo-nome" class="form-label">Nome:</label>
      <input type="text" id="campo-nome" class="form-control" placeholder="Digite seu nome">
    </div>
    <p id="mensagem-nome" class="text-muted"></p>

    <form id="form-cadastro" class="mb-3">
      <div class="mb-3">
        <label for="campo-email" class="form-label">E-mail:</label>
        <input type="email" id="campo-email" class="form-control" placeholder="Digite seu e-mail" required>
      </div>
      <button type="submit" class="btn btn-success">Enviar</button>
    </form>
    <p id="mensagem-form" class="text-success fw-bold"></p>

    <div id="area-mouse" class="border rounded p-5 text-center bg-light">
      Passe o mouse aqui
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

**43.** Adicione um evento de `click` no botão `#btn-clicar` usando `addEventListener`. Quando clicado, o parágrafo `#resultado-clique` deve exibir o texto `"Você clicou no botão!"`.

**44.** Modifique o exercício anterior para que, a cada clique, um contador seja incrementado e exibido dentro de `#resultado-clique`, no formato: `"Você clicou 3 vez(es)."`.

**45.** Adicione um evento `input` no campo `#campo-nome` que atualize em tempo real o parágrafo `#mensagem-nome` com a frase `"Você está digitando: [valor atual do campo]"`.

**46.** Adicione um evento `keyup` no campo `#campo-nome` que verifique, a cada tecla digitada, se o texto tem menos de 3 caracteres. Se tiver, exiba `"Nome muito curto"` em `#mensagem-nome`; caso contrário, exiba `"Nome válido"`.

**47.** Adicione um listener de `submit` no formulário `#form-cadastro`. Use `event.preventDefault()` para impedir o recarregamento da página e exiba em `#mensagem-form` a mensagem `"Cadastro enviado com sucesso!"` junto com o valor digitado no campo de e-mail.

**48.** Adicione os eventos `mouseenter` e `mouseleave` na `#area-mouse`: quando o mouse entrar, altere o texto para `"O mouse está aqui!"` e mude a cor de fundo; quando o mouse saltar, volte ao texto e à cor originais.

**49.** No campo `#campo-email`, adicione um evento `blur` (quando o campo perde o foco) que verifique se o valor digitado contém o caractere `"@"`. Se não contiver, exiba uma mensagem de erro em `#mensagem-form`; se contiver, não exiba nada.

**50.** Usando `document.addEventListener("keydown", ...)`, capture o evento de teclado em toda a página e exiba no console qual tecla foi pressionada (use `event.key`). Em seguida, adicione uma condição especial: se a tecla pressionada for `"Enter"`, exiba no console a mensagem `"Você pressionou Enter!"`.

---

### Gabarito de conferência (temas trabalhados por bloco)

| Bloco | Tema |
|---|---|
| 1 | Variáveis, tipos de dados e operadores |
| 2 | Estruturas condicionais (if/else, switch, ternário, operadores lógicos) |
| 3 | Estruturas de repetição (for, while, do...while) |
| 4 | Funções (declaração, arrow function, parâmetros, retorno) |
| 5 | Seleção de elementos do DOM |
| 6 | Manipulação do DOM (conteúdo, atributos, estilo, classes, criação/remoção de elementos) |
| 7 | Eventos (click, input, keyup, submit, mouseenter/mouseleave, blur, keydown) |
