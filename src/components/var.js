// Variáveis que agem como texto --------------------------------------------------------------------------------------
const dados = {
    anoAtual: new Date().getFullYear(),
    anosExperiencia: new Date().getFullYear()-2022,
    celular: '(66) 99969-1956',
    email: 'contato@rayssagomes.com',
    endereco: 'Barra do Garças e as proximidades',
    horarioAtendimento: 'Segunda a sexta: 7h às 17h',
};

function inserirVariaveis() {
    document.querySelectorAll("[data-var]").forEach(el => {
        const chave = el.getAttribute("data-var");
        el.innerText = dados[chave] || "";
    });
}

document.addEventListener("DOMContentLoaded", inserirVariaveis);

// Variáveis que agem como link --------------------------------------------------------------------------------------
const links = {
    email: "mailto:contato@rayssagomes.com",
    instagram: 'https://www.instagram.com/rayssaengenheira/',
    whatsapp: "https://wa.me/5566999691956",
};

function inserirLinks() {
  document.querySelectorAll("[data-link]").forEach(el => {
    const chave = el.getAttribute("data-link");

    if (links[chave]) {
      el.href = links[chave];
    }
  });
}

document.addEventListener("DOMContentLoaded", inserirLinks);