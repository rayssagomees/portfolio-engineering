class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="container">

                <div class="logo">
                    <img src="src/assets/logo-rg-bordo.png" alt="Logo Rayssa Gomes">
                    Rayssa Gomes
                </div>

                <ul class="nav-links">
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#processo">Processo</a></li>
                    <li><a href="#contato" class="cta-nav">Solicitar consultoria gratuita</a></li>
                </ul>

            </nav>
        </header>
        `;
    }
}

customElements.define("site-header", SiteHeader);