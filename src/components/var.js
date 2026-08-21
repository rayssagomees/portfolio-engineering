// Variáveis que agem como texto --------------------------------------------------------------------------------------
const dados = {
    anoAtual: new Date().getFullYear(),
    celular: '+55 (66) 99969-1956',
    email: 'contato@rayssagomes.com.br',
    endereco: 'Barra do Garças e as proximidades',
    horarioAtendimento: 'Segunda a sexta: 7h30 às 17h30',
    projetosConcluidos: 20 + '+',
    anosExperiencia: new Date().getFullYear()-2022,
    clientesSatisfeitos: 97/100 * 100 +'%',
    dinheiroObrasExecutadas: 'R$' + 100 + 'k+',
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
    email: "mailto:contato@rayssagomes.com.br",
    instagram: 'https://www.instagram.com/rayssagomees/',
    whatsapp: "https://wa.me/5566999691956?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20gratuita%20para%20o%20meu%20projeto!",
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