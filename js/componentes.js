// ==================================================
// COMPONENTES DINÂMICOS
// ==================================================

const projetos = [
    {
        titulo: "Doações",
        descricao:
            "Ajude a ONG DSF através de uma contribuição para nossos projetos.",
        link: "projetos.html#doacao",
        botao: "Saiba como doar"
    },
    {
        titulo: "Voluntariado",
        descricao:
            "Participe das ações da ONG DSF e contribua como voluntário.",
        link: "projetos.html#voluntariado",
        botao: "Quero participar"
    },
    {
        titulo: "Cadastro",
        descricao:
            "Faça seu cadastro para participar das atividades da ONG DSF.",
        link: "cadastro.html",
        botao: "Fazer cadastro"
    }
];


export function renderizarProjetos() {
    const container =
        document.querySelector("#lista-projetos");

    if (!container) {
        return;
    }

    const componentes =
        projetos.map((projeto) => {
            return `
                <article class="card-projeto">

                    <h3>
                        ${projeto.titulo}
                    </h3>

                    <p>
                        ${projeto.descricao}
                    </p>

                    <a
                        href="${projeto.link}"
                        class="botao-link"
                    >
                        ${projeto.botao}
                    </a>

                </article>
            `;
        });

    container.innerHTML =
        componentes.join("");
}