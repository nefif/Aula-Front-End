# Sistema Gestor de Projetos — React (Aula 1)

Código final produzido durante a Aula 1 do módulo React (Login + Listagem de Tarefas).

## Como usar

1. Crie o projeto Vite (se ainda não tiver):
   ```bash
   npm create vite@latest sistema-gestor-react
   ```
   Escolha **React** e **JavaScript**.

2. Entre na pasta do projeto e instale as dependências:
   ```bash
   cd sistema-gestor-react
   npm install
   npm install bootstrap
   ```

3. Copie o conteúdo deste pacote (pastas `components/`, `pages/`, e os arquivos
   `App.jsx` e `main.jsx`) para dentro da pasta `src/` do seu projeto,
   substituindo os arquivos que já existem lá.

4. Rode o projeto:
   ```bash
   npm run dev
   ```

5. Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── BarraUsuario.jsx
│   └── TarefaCard.jsx
├── pages/
│   ├── Login.jsx
│   └── ListaTarefas.jsx
├── App.jsx
└── main.jsx
```

## O que funciona

- **Login**: campos controlados (`usuario`, `senha`), validação de campos
  vazios com mensagem de erro, e ao logar com sucesso navega para a tela
  de Tarefas (sem recarregar a página).
- **Listagem de Tarefas**: adicionar nova tarefa via formulário, remover
  tarefa existente, tudo via estado (`useState`) — sem persistência ainda
  (dados somem ao atualizar a página; isso é assunto da próxima aula).

## Pendente (desafio da turma / próxima aula)

- `pages/CadastroUsuario.jsx` — a ser construído pelos alunos, seguindo o
  mesmo padrão de `Login.jsx`.
- Persistência (localStorage ou API).
- Roteamento real entre páginas (React Router).
