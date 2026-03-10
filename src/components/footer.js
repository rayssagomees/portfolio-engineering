class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">

                    <div class="footer-section">
                        <div class="logo-footer">
                            <img src="src/assets/logo-rg-dourado.webp" alt="Logo Rayssa Gomes">
                        </div>

                        <p>
                        Projetos desenvolvidos por Rayssa Gomes, com validação e responsabilidade técnica de engenheiros parceiros registrados no CREA. Garantia de conformidade legal e segurança técnica em todos os serviços.
                        </p>

                        <a data-link="instagram" target="_blank" rel="noopener noreferrer">
                            <i class="fi fi-brands-instagram"></i>
                        </a>
                    </div>

                    <div class="footer-section">
                        <h3>Serviços</h3>
                        <ul class="footer-links">
                            <li><a href="#servicos">Gerenciamento de obras</a></li>
                            <li><a href="#servicos">Perícia e vistoria</a></li>
                            <li><a href="#servicos">Projetos arquitetônicos</a></li>
                            <li><a href="#servicos">Projetos elétricos</a></li>
                            <li><a href="#servicos">Projetos estruturais</a></li>
                            <li><a href="#servicos">Projetos hidráulicos</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Institucional</h3>
                        <ul class="footer-links">
                            <li><a href="#projetos">Portfólio</a></li>
                            <li><a href="#faq">Perguntas frequentes</a></li>
                            <li><a href="https://www.rayssagomes.com/rss.xml" target="_blank" aria-label="Assinar Feed RSS" title="Subscrever via RSS"><i class="fi fi-rs-rss"></i>Subscrever via RSS</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Transparência</h3>
                        <ul class="footer-links">
                            <li><a href="#">Termos de uso</a></li>
                            <li><a href="#">Política de privacidade</a></li>
                        </ul>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p>&copy; <span class="ano"></span> Rayssa Gomes. Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>
        `;

        // Atualiza ano automaticamente
        this.querySelector(".ano").textContent = new Date().getFullYear();
    }
}

customElements.define("site-footer", SiteFooter);