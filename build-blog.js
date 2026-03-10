const fs = require('fs');

// 1. Ler os dados do JSON
const posts = JSON.parse(fs.readFileSync('posts.json', 'utf8'));

let htmlPosts = '';
let xmlItems = '';

// 2. Criar os blocos de HTML (usando as classes CSS)
posts.forEach(post => {
    htmlPosts += `
            <article class="blog-card">
                <div class="blog-card-image" style="background-image: url('${post.imagem}');"></div>
                <div class="blog-card-content">
                    <span class="blog-card-category">${post.categoria}</span>
                    <h4 class="blog-card-title">${post.titulo}</h4>
                    <p class="blog-card-desc">${post.descricao}</p>
                    <a href="${post.link}" class="blog-card-link">Ler artigo</a>
                </div>
            </article>`;

    // Criar item do XML (RSS)
    xmlItems += `
        <item>
            <title>${post.titulo}</title>
            <link>https://www.rayssagomes.com/${post.link}</link>
            <guid>https://www.rayssagomes.com/${post.link}</guid>
            <pubDate>${post.data}</pubDate>
            <description>${post.descricao}</description>
        </item>\n`;
});

// 3. O TEMPLATE INTEIRO DO SEU BLOG (SEM ESTILOS INLINE)
const blogTemplate = `<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title translate="no">Blog Rayssa Gomes - Engenharia Civil</title>
    <meta name="description" content="Artigos, dicas e estudos de caso sobre engenharia civil, projetos em BIM e planeamento de obras para evitar desperdícios.">
    <meta name="theme-color" content="#700F3A">
    <link rel="shortcut icon" href="src/assets/logo-rg-bordo.png" type="image/x-icon">
    <link rel="stylesheet" href="src/style/index.css">
    <script src="src/components/popup.js" defer></script>
    <link rel="alternate" type="application/rss+xml" title="Feed RSS do Blog de Rayssa Gomes" href="https://www.rayssagomes.com/rss.xml">
</head>
<body>
    <site-header></site-header>

    <section class="blog-hero">
        <div class="container blog-hero-container">
            <h1>Engenharia na Prática</h1>
            <p>Insights técnicos, estudos de caso estruturais e dicas práticas para economizar no seu estaleiro de obras sem comprometer a segurança.</p>
        </div>
    </section>

    <main class="container blog-main">
        
        <section class="featured-post-section">
            <div class="featured-post-card">
                <div class="featured-post-img" style="background-image: url('src/images/blog-bim.jpg');"></div>
                <div class="featured-post-content">
                    <span class="featured-post-tag">Artigo em Destaque</span>
                    <h2 class="featured-post-title">Como a compatibilização em BIM economiza até 15% na sua obra</h2>
                    <p class="featured-post-desc">Descubra porque desenhar o projeto elétrico e hidráulico separado do estrutural é o maior erro de quem vai construir, e como a tecnologia 3D elimina o retrabalho.</p>
                    <a href="blog/compatibilizacao-bim.html" class="btn-dark">Ler artigo completo</a>
                </div>
            </div>
        </section>

        <section class="lead-capture">
            <h3>Vai construir ou reformar este ano?</h3>
            <p>Descarregue o nosso Checklist Gratuito: <strong>5 Erros invisíveis na fundação e na hidráulica que encarecem a sua obra em 30%</strong>.</p>
            <form action="#" method="post">
                <input type="email" placeholder="O seu melhor e-mail" required>
                <button type="submit">Quero receber o PDF</button>
            </form>
            <p class="lead-capture-note"><i class="fi fi-rr-lock"></i> Não enviamos spam. Cancele a subscrição quando quiser.</p>
        </section>

        <h3 class="section-title">Publicações Recentes</h3>
        
        <div class="blog-grid">
${htmlPosts}
        </div>
    </main>

    <section class="bottom-cta">
        <div class="container bottom-cta-container">
            <h2>Tem um projeto em mente?</h2>
            <p>Deixe a parte complexa dos cálculos e das aprovações comigo. Solicite uma análise inicial para o seu terreno ou reforma sem qualquer compromisso.</p>
            <a href="/home#contato" class="btn-primary">Quero o meu diagnóstico gratuito</a>
        </div>
    </section>

    <site-footer></site-footer>

    <script src="src/components/header.js"></script>
    <script src="src/components/footer.js"></script>
    <script src="src/components/faq.js"></script>
    <script src="src/components/smooth-scrolling.js"></script>
    <script src="src/components/var.js"></script>
</body>
</html>`;

// 4. CRIAR O ARQUIVO DO ZERO
fs.writeFileSync('blog.html', blogTemplate);
console.log('✅ HTML do Blog gerado impecável: zero estilos inline!');

// 5. Gerar rss.xml
const rssTemplate = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Blog - Rayssa Gomes | Engenharia Civil</title>
    <link>https://www.rayssagomes.com/blog.html</link>
    <description>Dicas de engenharia civil, projetos estruturais otimizados em BIM e economia no canteiro de obras.</description>
    <language>pt-br</language>
    <atom:link href="https://www.rayssagomes.com/rss.xml" rel="self" type="application/rss+xml" />
${xmlItems}
</channel>
</rss>`;
fs.writeFileSync('rss.xml', rssTemplate);
console.log('✅ Feed RSS atualizado com sucesso!');