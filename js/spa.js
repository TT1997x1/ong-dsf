import {
    renderizarProjetos
} from "./componentes.js";

import {
    iniciarValidacaoFormulario
} from "./formulario.js";


// ==================================================
// ROTAS
// ==================================================

const rotasPermitidas = [
    "index.html",
    "projetos.html",
    "cadastro.html"
];


// ==================================================
// ÂNCORAS
// ==================================================

function irParaAncora(hash) {
    if (!hash) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }

    const elemento =
        document.querySelector(hash);

    if (elemento) {
        elemento.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// ==================================================
// CARREGAMENTO DA SPA
// ==================================================

async function carregarPagina(
    url,
    adicionarHistorico = true
) {
    try {
        const destino =
            new URL(
                url,
                window.location.href
            );

        const nomePagina =
            destino.pathname
                .split("/")
                .pop() || "index.html";

        if (
            !rotasPermitidas.includes(
                nomePagina
            )
        ) {
            window.location.href =
                destino.href;

            return;
        }

        const resposta =
            await fetch(destino.href);

        if (!resposta.ok) {
            throw new Error(
                "Não foi possível carregar a página."
            );
        }

        const html =
            await resposta.text();

        const parser =
            new DOMParser();

        const documento =
            parser.parseFromString(
                html,
                "text/html"
            );

        const novoMain =
            documento.querySelector("main");

        const mainAtual =
            document.querySelector("main");

        if (!novoMain || !mainAtual) {
            throw new Error(
                "Conteúdo principal não encontrado."
            );
        }

        // Substitui apenas o conteúdo principal.
        mainAtual.innerHTML =
            novoMain.innerHTML;

        document.title =
            documento.title;

        if (adicionarHistorico) {
            history.pushState(
                {
                    pagina: nomePagina,
                    hash: destino.hash
                },
                "",
                destino.href
            );
        }

        const menuControle =
            document.querySelector(
                "#menu-controle"
            );

        if (menuControle) {
            menuControle.checked = false;
        }


        // ------------------------------------------
        // REINICIALIZA OS OUTROS MÓDULOS
        // ------------------------------------------

        renderizarProjetos();

        iniciarValidacaoFormulario();


        irParaAncora(
            destino.hash
        );

    } catch (erro) {
        console.error(
            "Erro na navegação:",
            erro
        );

        window.location.href = url;
    }
}


// ==================================================
// INICIALIZAÇÃO DA SPA
// ==================================================

export function iniciarSPA() {

    // Event Delegation para os links.
    document.addEventListener(
        "click",
        function (evento) {
            const link =
                evento.target.closest("a");

            if (!link) {
                return;
            }

            if (
                link.target === "_blank" ||
                link.hasAttribute("download") ||
                link.protocol === "mailto:" ||
                link.protocol === "tel:"
            ) {
                return;
            }

            if (
                link.origin !==
                window.location.origin
            ) {
                return;
            }

            const destino =
                new URL(link.href);

            const nomePagina =
                destino.pathname
                    .split("/")
                    .pop() || "index.html";

            if (
                !rotasPermitidas.includes(
                    nomePagina
                )
            ) {
                return;
            }

            evento.preventDefault();


            // Mesma página com âncora.
            if (
                destino.pathname ===
                window.location.pathname &&
                destino.hash
            ) {
                history.pushState(
                    {
                        pagina: nomePagina,
                        hash: destino.hash
                    },
                    "",
                    destino.href
                );

                irParaAncora(
                    destino.hash
                );

                return;
            }

            carregarPagina(
                destino.href
            );
        }
    );


    // Botões voltar e avançar.
    window.addEventListener(
        "popstate",
        function () {
            carregarPagina(
                window.location.href,
                false
            );
        }
    );
}