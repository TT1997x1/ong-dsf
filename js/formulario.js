import {
    salvarCadastroLocal,
    restaurarCadastroLocal
} from "./storage.js";


// ==================================================
// DAY.JS - CÁLCULO DA IDADE
// ==================================================

function calcularIdade() {
    const campoNascimento =
        document.querySelector("#nascimento");

    const resultado =
        document.querySelector("#idade-calculada");

    if (!campoNascimento || !resultado) {
        return;
    }

    if (!campoNascimento.value) {
        resultado.textContent = "";
        resultado.classList.remove("idade-erro");
        return;
    }

    if (typeof dayjs === "undefined") {
        console.error(
            "A biblioteca Day.js não foi carregada."
        );

        resultado.textContent =
            "Não foi possível calcular a idade.";

        resultado.classList.add(
            "idade-erro"
        );

        return;
    }

    const dataNascimento =
        dayjs(campoNascimento.value);

    const hoje =
        dayjs();

    const idade =
        hoje.diff(
            dataNascimento,
            "year"
        );

    if (dataNascimento.isAfter(hoje, "day")) {
        resultado.textContent =
            "A data de nascimento não pode estar no futuro.";

        resultado.classList.add(
            "idade-erro"
        );

        return;
    }

    resultado.classList.remove(
        "idade-erro"
    );

    resultado.textContent =
        `Idade calculada: ${idade} anos.`;
}


// ==================================================
// MENSAGENS DE VALIDAÇÃO
// ==================================================

function obterMensagemErro(campo) {
    if (campo.validity.valueMissing) {
        return "Este campo é obrigatório.";
    }

    if (campo.validity.typeMismatch) {
        return "Digite um valor em formato válido.";
    }

    if (campo.validity.patternMismatch) {
        if (campo.id === "cpf") {
            return "Digite o CPF no formato 000.000.000-00.";
        }

        if (campo.id === "telefone") {
            return "Digite o telefone no formato (00) 00000-0000.";
        }

        if (campo.id === "cep") {
            return "Digite o CEP no formato 00000-000.";
        }

        return "O formato informado não é válido.";
    }

    if (campo.validity.tooShort) {
        return `Digite pelo menos ${campo.minLength} caracteres.`;
    }

    if (campo.validity.tooLong) {
        return `Digite no máximo ${campo.maxLength} caracteres.`;
    }

    return "Verifique o valor informado.";
}


function removerMensagemErro(campo) {
    const grupo =
        campo.closest(".campo-formulario");

    if (!grupo) {
        return;
    }

    const mensagem =
        grupo.querySelector(".mensagem-erro");

    if (mensagem) {
        mensagem.remove();
    }
}


function mostrarErro(campo) {
    removerMensagemErro(campo);

    campo.classList.remove(
        "campo-sucesso"
    );

    campo.classList.add(
        "campo-erro"
    );

    const grupo =
        campo.closest(".campo-formulario");

    if (!grupo) {
        return;
    }

    const mensagem =
        document.createElement("small");

    mensagem.className =
        "mensagem-erro";

    mensagem.textContent =
        obterMensagemErro(campo);

    grupo.appendChild(mensagem);
}


function mostrarSucesso(campo) {
    removerMensagemErro(campo);

    campo.classList.remove(
        "campo-erro"
    );

    campo.classList.add(
        "campo-sucesso"
    );
}


function validarCampo(campo) {
    if (!campo.validity.valid) {
        mostrarErro(campo);
        return false;
    }

    mostrarSucesso(campo);

    return true;
}


// ==================================================
// INICIALIZAÇÃO DO FORMULÁRIO
// ==================================================

export function iniciarValidacaoFormulario() {
    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }

    // Recupera dados persistidos.
    restaurarCadastroLocal();

    // Atualiza a idade caso exista uma data salva.
    calcularIdade();

    const campos =
        formulario.querySelectorAll(
            "input:not([type='submit']), select"
        );

    const campoNascimento =
        formulario.querySelector("#nascimento");


    // ----------------------------------------------
    // DAY.JS
    // ----------------------------------------------

    if (campoNascimento) {
        campoNascimento.addEventListener(
            "change",
            function () {
                calcularIdade();
            }
        );
    }


    // ----------------------------------------------
    // VALIDAÇÃO EM TEMPO REAL
    // ----------------------------------------------

    campos.forEach((campo) => {
        campo.addEventListener(
            "input",
            function () {
                validarCampo(campo);
            }
        );

        campo.addEventListener(
            "blur",
            function () {
                validarCampo(campo);
            }
        );
    });


    // ----------------------------------------------
    // SUBMIT
    // ----------------------------------------------

    formulario.addEventListener(
        "submit",
        function (evento) {
            evento.preventDefault();

            let formularioValido = true;

            campos.forEach((campo) => {
                if (!validarCampo(campo)) {
                    formularioValido = false;
                }
            });

            const mensagemFormulario =
                document.querySelector(
                    "#mensagem-formulario"
                );

            if (!mensagemFormulario) {
                return;
            }

            if (!formularioValido) {
                mensagemFormulario.textContent =
                    "Existem campos que precisam ser corrigidos.";

                mensagemFormulario.className =
                    "mensagem-formulario mensagem-formulario-erro";

                const primeiroErro =
                    formulario.querySelector(
                        ".campo-erro"
                    );

                if (primeiroErro) {
                    primeiroErro.focus();
                }

                return;
            }

            // Salva somente depois da validação.
            salvarCadastroLocal();

            mensagemFormulario.textContent =
                "Cadastro validado e salvo com sucesso!";

            mensagemFormulario.className =
                "mensagem-formulario mensagem-formulario-sucesso";
        }
    );
}