# Gabarito — Lista de Exercícios: Fundamentos do JavaScript + DOM + Eventos

> Este gabarito traz **uma possível solução** para cada questão. Existem outras formas corretas de resolver — o importante é que o resultado final e a lógica estejam certos. Use como referência para corrigir ou para comparar com a solução dos alunos.

---

## Bloco 1 — Variáveis, Tipos de Dados e Operadores

**1.**
```javascript
let nome = "Maria";
let idade = 28;
console.log(`${nome} tem ${idade} anos.`);
```

**2.**
```javascript
// var: escopo de função, pode ser redeclarada e reatribuída.
// let: escopo de bloco, pode ser reatribuída, mas não redeclarada no mesmo escopo.
// const: escopo de bloco, não pode ser reatribuída nem redeclarada.

const PI = 3.14;
PI = 3.15; // TypeError: Assignment to constant variable.
```

**3.**
```javascript
console.log(typeof "10");        // "string"
console.log(typeof 10);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
```

**4.**
```javascript
let a = 17;
let b = 4;
console.log(`Soma: ${a + b}`);          // 21
console.log(`Subtração: ${a - b}`);     // 13
console.log(`Multiplicação: ${a * b}`); // 68
console.log(`Divisão: ${a / b}`);       // 4.25
console.log(`Resto: ${a % b}`);         // 1
```

**5.**
```javascript
// == compara apenas o valor, convertendo os tipos se necessário (comparação "fraca")
// === compara valor E tipo, sem conversão (comparação "estrita")

console.log("5" == 5);   // true  (converte a string para número)
console.log("5" === 5);  // false (tipos diferentes: string e number)
console.log(0 == false); // true  (false é convertido para 0)
```

**6.**
```javascript
let precoProduto = 49.9;
let quantidade = 3;
let total = precoProduto * quantidade;
console.log(`O total da compra é: R$ ${total.toFixed(2)}`);
// O total da compra é: R$ 149.70
```

**7.**
```javascript
let contador = 10;
console.log(contador);   // 10
contador++;
console.log(contador);   // 11
contador--;
console.log(contador);   // 10
```

**8.**
```javascript
let numero1 = Number("25");
let numero2 = parseFloat("3.5");
let soma = numero1 + numero2;
console.log(soma); // 28.5
```

---

## Bloco 2 — Estruturas Condicionais

**9.**
```javascript
let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

**10.**
```javascript
let nota = 8;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Insuficiente");
}
```

**11.**
```javascript
let numero = 7;
let resultado = (numero % 2 === 0) ? "par" : "ímpar";
console.log(`O número é ${resultado}`);
```

**12.**
```javascript
let mes = 5;

switch (mes) {
  case 1: console.log("Janeiro"); break;
  case 2: console.log("Fevereiro"); break;
  case 3: console.log("Março"); break;
  case 4: console.log("Abril"); break;
  case 5: console.log("Maio"); break;
  case 6: console.log("Junho"); break;
  case 7: console.log("Julho"); break;
  case 8: console.log("Agosto"); break;
  case 9: console.log("Setembro"); break;
  case 10: console.log("Outubro"); break;
  case 11: console.log("Novembro"); break;
  case 12: console.log("Dezembro"); break;
  default: console.log("Mês inválido");
}
```

**13.**
```javascript
let nota1 = 7;
let nota2 = 6;
let nota3 = 5;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 6 && nota1 >= 4 && nota2 >= 4 && nota3 >= 4) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

**14.**
```javascript
function verificarTriangulo(a, b, c) {
  if ((a + b > c) && (a + c > b) && (b + c > a)) {
    console.log("Os lados formam um triângulo válido.");
  } else {
    console.log("Os lados NÃO formam um triângulo válido.");
  }
}

verificarTriangulo(3, 4, 5); // válido
verificarTriangulo(1, 1, 5); // inválido
```

**15.**
```javascript
let senha = "abc123";
let confirmacaoSenha = "abc123";

if (senha !== confirmacaoSenha) {
  console.log("As senhas não coincidem.");
} else if (senha.length < 6) {
  console.log("A senha deve ter pelo menos 6 caracteres.");
} else {
  console.log("Senha válida e confirmada com sucesso!");
}
```

---

## Bloco 3 — Estruturas de Repetição

**16.**
```javascript
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
```

**17.**
```javascript
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

**18.**
```javascript
let contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}
```

**19.**
```javascript
let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log(`A soma de 1 a 100 é: ${soma}`); // 5050
```

**20.**
```javascript
let numero = 5;
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`); // 120
```

**21.**
```javascript
let senhaSecreta = 4;
let tentativa = 1;

do {
  console.log("Tentativa incorreta");
  tentativa++;
} while (tentativa !== senhaSecreta);

console.log("Senha correta!");
```

**22.**
```javascript
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

## Bloco 4 — Funções

**23.**
```javascript
function saudacao(nome) {
  return `Olá, ${nome}! Bem-vindo(a).`;
}

console.log(saudacao("Carlos"));
```

**24.**
```javascript
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}

console.log(calcularAreaRetangulo(5, 3));   // 15
console.log(calcularAreaRetangulo(10, 2));  // 20
```

**25.**
```javascript
const calcularAreaRetangulo = (largura, altura) => largura * altura;

console.log(calcularAreaRetangulo(5, 3));  // 15

// Diferença: a arrow function tem uma sintaxe mais curta e não precisa
// da palavra "function" nem do "return" quando o corpo é uma única expressão.
// Além disso, arrow functions não possuem seu próprio "this".
```

**26.**
```javascript
function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

let idadeUsuario = 16;

if (ehMaiorDeIdade(idadeUsuario)) {
  console.log("Pode acessar o conteúdo.");
} else {
  console.log("Acesso não permitido para menores de idade.");
}
```

**27.**
```javascript
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function situacaoAluno(media) {
  return media >= 6 ? "Aprovado" : "Reprovado";
}

let media = calcularMedia(8, 7, 6);
console.log(situacaoAluno(media)); // Aprovado
```

**28.**
```javascript
// Parâmetro: é o "nome" definido na declaração da função (ex.: nome, em function saudacao(nome)).
// Argumento: é o valor real enviado quando a função é chamada (ex.: "Carlos", em saudacao("Carlos")).

function saudacao(nome = "visitante") {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Ana"));  // Olá, Ana!
console.log(saudacao());       // Olá, visitante!
```

---

## Bloco 5 — Seleção de Elementos do DOM

**29.**
```javascript
let titulo = document.getElementById("titulo");
console.log(titulo.textContent); // Painel de Boas-Vindas
```

**30.**
```javascript
let paragrafo = document.querySelector(".lead");
console.log(paragrafo.textContent);
```

**31.**
```javascript
let itens = document.querySelectorAll("#lista-frutas li");

//usando for:
for (let i = 0; i < itens.length; i++) {
  console.log(itens[i].textContent);
}
```

**32.**
```javascript
let cardTitulo = document.querySelector("#card-titulo");
let cardTexto = document.querySelector("#card-texto");

console.log(`${cardTitulo.textContent} - ${cardTexto.textContent}`);
```

**33.**
```javascript
let imagem = document.getElementById("imagem-usuario");
console.log(imagem.getAttribute("src"));
console.log(imagem.getAttribute("alt"));
```

**34.**
```javascript
let itens = document.querySelectorAll("#lista-frutas li");
console.log(`A lista possui ${itens.length} item(ns).`);
```

---

## Bloco 6 — Manipulando o DOM

**35.**
```javascript
let titulo = document.getElementById("titulo");
titulo.textContent = "Painel Atualizado!";
```

**36.**
```javascript
let cardTexto = document.getElementById("card-texto");
cardTexto.innerHTML = "Este é um texto <strong>muito importante</strong> para você ler.";
```

**37.**
```javascript
let imagem = document.getElementById("imagem-usuario");
imagem.setAttribute("src", "https://via.placeholder.com/200");
```

**38.**
```javascript
let titulo = document.getElementById("titulo");
titulo.style.backgroundColor = "navy";
titulo.style.color = "white";
```

**39.**
```javascript
let titulo = document.getElementById("titulo");
titulo.classList.remove("text-primary");
titulo.classList.add("text-danger");
```

**40.**
```javascript
let lista = document.getElementById("lista-frutas");

let novoItem = document.createElement("li");
novoItem.textContent = "Morango";
novoItem.classList.add("list-group-item");

lista.appendChild(novoItem);
```

**41.**
```javascript
let primeiroItem = document.querySelector("#lista-frutas li");
primeiroItem.remove();
```

**42.**
```javascript
let cardTitulo = document.getElementById("card-titulo");
cardTitulo.classList.toggle("d-none");
```

---

## Bloco 7 — Eventos

**43.**
```javascript
let botao = document.getElementById("btn-clicar");
let resultado = document.getElementById("resultado-clique");

botao.addEventListener("click", function () {
  resultado.textContent = "Você clicou no botão!";
});
```

**44.**
```javascript
let botao = document.getElementById("btn-clicar");
let resultado = document.getElementById("resultado-clique");
let cliques = 0;

botao.addEventListener("click", function () {
  cliques++;
  resultado.textContent = `Você clicou ${cliques} vez(es).`;
});
```

**45.**
```javascript
let campoNome = document.getElementById("campo-nome");
let mensagemNome = document.getElementById("mensagem-nome");

campoNome.addEventListener("input", function () {
  mensagemNome.textContent = `Você está digitando: ${campoNome.value}`;
});
```

**46.**
```javascript
let campoNome = document.getElementById("campo-nome");
let mensagemNome = document.getElementById("mensagem-nome");

campoNome.addEventListener("keyup", function () {
  if (campoNome.value.length < 3) {
    mensagemNome.textContent = "Nome muito curto";
  } else {
    mensagemNome.textContent = "Nome válido";
  }
});
```

**47.**
```javascript
let formulario = document.getElementById("form-cadastro");
let campoEmail = document.getElementById("campo-email");
let mensagemForm = document.getElementById("mensagem-form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  mensagemForm.textContent = `Cadastro enviado com sucesso! E-mail: ${campoEmail.value}`;
});
```

**48.**
```javascript
let areaMouse = document.getElementById("area-mouse");

areaMouse.addEventListener("mouseenter", function () {
  areaMouse.textContent = "O mouse está aqui!";
  areaMouse.style.backgroundColor = "lightgreen";
});

areaMouse.addEventListener("mouseleave", function () {
  areaMouse.textContent = "Passe o mouse aqui";
  areaMouse.style.backgroundColor = "";
});
```

**49.**
```javascript
let campoEmail = document.getElementById("campo-email");
let mensagemForm = document.getElementById("mensagem-form");

campoEmail.addEventListener("blur", function () {
  if (!campoEmail.value.includes("@")) {
    mensagemForm.textContent = "E-mail inválido: falta o caractere @";
    mensagemForm.classList.remove("text-success");
    mensagemForm.classList.add("text-danger");
  } else {
    mensagemForm.textContent = "";
  }
});
```

**50.**
```javascript
document.addEventListener("keydown", function (event) {
  console.log(`Tecla pressionada: ${event.key}`);

  if (event.key === "Enter") {
    console.log("Você pressionou Enter!");
  }
});
```

---

### Observação final para correção

Os alunos podem usar nomes de variáveis diferentes, funções anônimas em vez de nomeadas (ou vice-versa), e `forEach` em vez de `for` (ou vice-versa) — isso não deve ser considerado erro. O foco da correção deve ser: **a lógica está correta?**, **o resultado no console/tela é o esperado?** e **o código segue as boas práticas já ensinadas (nomes descritivos, indentação, uso de `const`/`let` no lugar de `var`)?**
