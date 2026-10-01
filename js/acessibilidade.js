const CHAVE_CONTRASTE = "altoContrasteONG";

function aplicarContraste(ativo) {
  document.body.classList.toggle("alto-contraste", ativo);

  const botao = document.querySelector("#botao-contraste");

  if (!botao) {
    return;
  }

  botao.setAttribute("aria-pressed", String(ativo));

  botao.setAttribute(
    "aria-label",
    ativo
      ? "Desativar modo de alto contraste"
      : "Ativar modo de alto contraste"
  );

  botao.textContent = ativo
    ? "◐ Contraste normal"
    : "◐ Alto contraste";
}

export function iniciarAcessibilidade() {
  const botao = document.querySelector("#botao-contraste");

  if (!botao) {
    return;
  }

  const contrasteSalvo =
    localStorage.getItem(CHAVE_CONTRASTE) === "true";

  aplicarContraste(contrasteSalvo);

  botao.addEventListener("click", () => {
    const ativo =
      !document.body.classList.contains("alto-contraste");

    aplicarContraste(ativo);

    localStorage.setItem(
      CHAVE_CONTRASTE,
      String(ativo)
    );
  });
}