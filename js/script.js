// ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

const ativarLink = (link) => {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
};

links.forEach(ativarLink);

// ativar items do orçamento

const url = new URLSearchParams(location.search);

const ativarProduto = (parametro) => {
  const elemento = document.querySelector(`#${parametro}`);
  if (elemento) {
    elemento.checked = true;
  }
};

url.forEach(ativarProduto);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

const ativarPergunta = (event) => {
  const pergunta = event.target;
  const controls = pergunta.getAttribute("aria-controls");

  const resposta = document.querySelector(`#${controls}`);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
};

const handleClick = (pergunta) => {
  pergunta.addEventListener("click", ativarPergunta);
};

perguntas.forEach(handleClick);
