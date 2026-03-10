class WhatsAppBtn extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a data-link="whatsapp" class="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Entrar em contato via WhatsApp"><i class="fi fi-brands-whatsapp" aria-hidden="true"></i></a>
        `;
    }
}

customElements.define("whatsapp-btn", WhatsAppBtn);