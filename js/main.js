// ==================================================
// ARQUIVO PRINCIPAL DA APLICAÇÃO
// ==================================================

import {
    iniciarSPA
} from "./spa.js";

import {
    renderizarProjetos
} from "./componentes.js";

import {
    iniciarValidacaoFormulario
} from "./formulario.js";


// ==================================================
// INICIALIZAÇÃO
// ==================================================

renderizarProjetos();

iniciarValidacaoFormulario();

iniciarSPA();