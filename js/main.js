// Arquivo principal responsável pela inicialização da aplicação

import {
    iniciarSPA
} from "./spa.js";

import {
    renderizarProjetos
} from "./componentes.js";

import {
    iniciarValidacaoFormulario
} from "./formulario.js";

import {
    iniciarAcessibilidade
} from "./acessibilidade.js";

renderizarProjetos();
iniciarValidacaoFormulario();
iniciarSPA();
iniciarAcessibilidade();