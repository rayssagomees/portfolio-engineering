const fs = require('fs');

// 1. Ler os dados do JSON
const posts = JSON.parse(fs.readFileSync('posts.json', 'utf8'));

let htmlPosts = '';
let xmlItems = '';

// 2. Criar os blocos de HTML e XML
posts.forEach(post => {
    htmlPosts += `
            <article style="background: white; border: 1px solid #eee; border-radius: 8px; overflow: hidden; transition: transform 0.3s; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                <div style="height: 200px; background-color: #1A2436; background-image: url('${post.imagem}'); background-size: cover; background-position: center;"></div>
                <div style="padding: 25px;">
                    <span style="color: #D72638; font-size: 0.8rem; font-weight: bold; text-transform: uppercase;">${post.categoria}</span>
                    <h4 style="color: #1A2436; margin: 10px 0; font-size: 1.2rem;">${post.titulo}</h4>
                    <p style="color: #555; font-size: 0.9rem; margin-bottom: 20px; line-height: 1.5;">${post.descricao}</p>
                    <a href="${post.link}" style="color: #0F4C5C; font-weight: bold; text-decoration: none; border-bottom: 1px solid #0F4C5C; padding-bottom: 2px;">Ler artigo →</a>
                </div>
            </article>`;

    xmlItems += `
        <item>
            <title>${post.titulo}</title>
            <link>https://www.rayssagomes.com/${post.link}</link>
            <guid>https://www.rayssagomes.com/${post.link}</guid>
            <pubDate>${post.data}</pubDate>
            <description>${post.descricao}</description>
        </item>\n`;
});

// 3. O TEMPLATE INTEIRO DO SEU BLOG (À prova de falhas)
const blogTemplate = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title translate="no">Blog Rayssa Gomes - Engenharia Civil</title>
    <meta name="description" content="Artigos, dicas e estudos de caso sobre engenharia civil, projetos em BIM e planeamento de obras para evitar desperdícios.">
    <meta name="theme-color" content="#1A2436">
    <link rel="shortcut icon" href="src/assets/logo-rg-bordo.png" type="image/x-icon">
    <link rel="stylesheet" href="src/style/index.css">
    <script src="src/components/popup.js" defer></script>
    <link rel="alternate" type="application/rss+xml" title="Feed RSS do Blog de Rayssa Gomes" href="https://www.rayssagomes.com/rss.xml">
</head>
<body>
    <site-header></site-header>

    <section style="background: #1A2436; color: white; padding: 60px 20px; text-align: center;">
        <div class="container" style="max-width: 800px; margin: 0 auto;">
            <h1 style="font-size: 2.5rem; margin-bottom: 15px;">Engenharia na Prática</h1>
            <p style="font-size: 1.1rem; color: #ccc; line-height: 1.6;">Insights técnicos, estudos de caso estruturais e dicas práticas para economizar no seu estaleiro de obras sem comprometer a segurança.</p>
        </div>
    </section>

    <main class="container" style="padding: 50px 20px; flex: 1; max-width: 1100px; margin: 0 auto;">

        <section style="margin-bottom: 60px;">
            <div style="background: white; border-radius: 12px; overflow: hidden; display: flex; flex-wrap: wrap; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #eee;">
                <div style="flex: 1; min-width: 300px; background: #0F4C5C; display: flex; align-items: center; justify-content: center; color: white; min-height: 250px;">
                    [Imagem do Post de Destaque]
                </div>
                <div style="flex: 1; min-width: 300px; padding: 40px; display: flex; flex-direction: column; justify-content: center;">
                    <span style="color: #D72638; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Artigo em Destaque</span>
                    <h2 style="color: #1A2436; margin-bottom: 15px; font-size: 1.8rem; line-height: 1.2;">Como a compatibilização em BIM economiza até 15% na sua obra</h2>
                    <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">Descubra porque desenhar o projeto elétrico e hidráulico separado do estrutural é o maior erro de quem vai construir, e como a tecnologia 3D elimina o retrabalho.</p>
                    <a href="post-bim.html" style="background: #1A2436; color: white; padding: 12px 25px; border-radius: 5px; text-decoration: none; font-weight: bold; align-self: flex-start; transition: 0.3s;">Ler Artigo Completo →</a>
                </div>
            </div>
        </section>

        <section style="background: #0F4C5C; color: white; padding: 40px; border-radius: 12px; margin-bottom: 60px; text-align: center; box-shadow: 0 10px 20px rgba(15, 76, 92, 0.2);">
            <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Vai construir ou reformar este ano?</h3>
            <p style="margin-bottom: 25px; color: #e0f2f1; max-width: 600px; margin-left: auto; margin-right: auto;">Descarregue o nosso Checklist Gratuito: <strong>5 Erros invisíveis na fundação e na hidráulica que encarecem a sua obra em 30%</strong>.</p>
            <form action="#" method="post" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <input type="email" placeholder="O seu melhor e-mail" required style="padding: 15px; width: 100%; max-width: 300px; border-radius: 5px; border: none; outline: none;">
                <button type="submit" style="background: #D72638; color: white; padding: 15px 30px; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">Quero receber o PDF</button>
            </form>
            <p style="font-size: 0.8rem; color: #a1cdd8; margin-top: 15px;"><i class="fi fi-rr-lock"></i> Não enviamos spam. Cancele a subscrição quando quiser.</p>
        </section>

        <h3 style="color: #1A2436; margin-bottom: 30px; font-size: 1.5rem; border-bottom: 2px solid #ddd; padding-bottom: 10px;">Publicações Recentes</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 60px;">
${htmlPosts}
        </div>
    </main>

    <section style="background: #1A2436; padding: 60px 20px; text-align: center; color: white;">
        <div class="container" style="max-width: 700px; margin: 0 auto;">
            <h2 style="margin-bottom: 20px;">Tem um projeto em mente?</h2>
            <p style="color: #ccc; margin-bottom: 30px; line-height: 1.6;">Deixe a parte complexa dos cálculos e das aprovações comigo. Solicite uma análise inicial para o seu terreno ou reforma sem qualquer compromisso.</p>
            <a href="index.html#contato" style="background: #D72638; color: white; padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block; font-size: 1.1rem; box-shadow: 0 5px 15px rgba(215, 38, 56, 0.3);">Quero o meu diagnóstico gratuito</a>
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
console.log('✅ HTML do Blog gerado do zero com sucesso!');

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