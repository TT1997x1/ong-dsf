# ONG DSF

Projeto front-end desenvolvido para uma ONG, com o objetivo de apresentar informações institucionais, projetos sociais e permitir o cadastro de pessoas interessadas em participar das ações.

O projeto também foi utilizado para aplicar conceitos de HTML semântico, CSS responsivo, JavaScript, manipulação do DOM, armazenamento local, SPA, modularização e versionamento com Git.

## Funcionalidades

- Página institucional da ONG.
- Apresentação dos projetos sociais.
- Cadastro de participantes.
- Validação dos campos do formulário.
- Persistência dos dados com localStorage.
- Navegação SPA utilizando History API.
- Componentes criados dinamicamente com JavaScript.
- Cálculo de idade utilizando Day.js.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ES6 Modules
- History API
- Fetch API
- localStorage
- Day.js
- Git
- GitHub

## Estrutura do projeto

```text
projeto-ong-dsf/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── imagens/
│   ├── acao-social.jpg
│   └── acao-social.webp
├── js/
│   ├── main.js
│   ├── spa.js
│   ├── componentes.js
│   ├── formulario.js
│   └── storage.js
└── README.md
```

## Como executar o projeto

### Pré-requisitos

Para executar o projeto é necessário ter:

- Um navegador web atualizado.
- Visual Studio Code ou outro editor de código.
- Uma forma de servir os arquivos por HTTP, como a extensão Live Server do VS Code.

Não é necessário instalar dependências com npm, pois o projeto utiliza JavaScript nativo e a biblioteca Day.js é carregada por CDN.

### Execução local

1. Clone o repositório:

```bash
git clone https://github.com/TT1997x1/ong-dsf.git
```

2. Entre na pasta do projeto:

```bash
cd ong-dsf
```

3. Abra o projeto no Visual Studio Code:

```bash
code .
```

4. Abra o arquivo `html/index.html` utilizando o Live Server.

5. A aplicação será aberta no navegador e poderá ser utilizada localmente.

## Versionamento

O projeto utiliza uma estratégia baseada em GitFlow.

- `main`: versão estável do projeto.
- `develop`: integração das alterações em desenvolvimento.
- `feature/*`: desenvolvimento isolado de novas funcionalidades ou ajustes.

As alterações são integradas por meio de Pull Requests antes de chegarem à branch principal.

As mensagens de commit seguem o padrão Conventional Commits sempre que aplicável.

## Versionamento semântico

As versões do projeto seguem o padrão:

```text
MAJOR.MINOR.PATCH
```

A primeira versão estável foi publicada como:

```text
v1.0.0
```

## Release atual

**v1.0.0 - Primeira versão estável**

A versão reúne a navegação SPA, componentes dinâmicos, validação de formulário, persistência com localStorage, integração com Day.js, layout responsivo e modularização do JavaScript.

## Autor

Luan Henrique