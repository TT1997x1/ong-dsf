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



renderizarProjetos();

iniciarValidacaoFormulario();

iniciarSPA();