// ==================================================
// LOCAL STORAGE - PERSISTÊNCIA DO CADASTRO
// ==================================================

const CHAVE_CADASTRO = "cadastroONG";

export function salvarCadastroLocal() {
    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }

    const dadosCadastro = {
        nome: formulario.querySelector("#nome").value,
        email: formulario.querySelector("#email").value,
        nascimento: formulario.querySelector("#nascimento").value,
        cpf: formulario.querySelector("#cpf").value,
        telefone: formulario.querySelector("#telefone").value,
        endereco: formulario.querySelector("#endereco").value,
        cidade: formulario.querySelector("#cidade").value,
        estado: formulario.querySelector("#estado").value,
        cep: formulario.querySelector("#cep").value
    };

    localStorage.setItem(
        CHAVE_CADASTRO,
        JSON.stringify(dadosCadastro)
    );
}


export function restaurarCadastroLocal() {
    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }

    const dadosSalvos =
        localStorage.getItem(CHAVE_CADASTRO);

    if (!dadosSalvos) {
        return;
    }

    try {
        const dados =
            JSON.parse(dadosSalvos);

        formulario.querySelector("#nome").value =
            dados.nome || "";

        formulario.querySelector("#email").value =
            dados.email || "";

        formulario.querySelector("#nascimento").value =
            dados.nascimento || "";

        formulario.querySelector("#cpf").value =
            dados.cpf || "";

        formulario.querySelector("#telefone").value =
            dados.telefone || "";

        formulario.querySelector("#endereco").value =
            dados.endereco || "";

        formulario.querySelector("#cidade").value =
            dados.cidade || "";

        formulario.querySelector("#estado").value =
            dados.estado || "";

        formulario.querySelector("#cep").value =
            dados.cep || "";

    } catch (erro) {
        console.error(
            "Erro ao recuperar cadastro:",
            erro
        );

        localStorage.removeItem(
            CHAVE_CADASTRO
        );
    }
}