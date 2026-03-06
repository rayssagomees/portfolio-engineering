document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("popupOverlay");

    const POPUP_KEY = "popupShownDate";
    const DAYS_HIDE = 0;

    function canShowPopup() {

        const lastShown = localStorage.getItem(POPUP_KEY);

        if (!lastShown) return true;

        const now = new Date().getTime();
        const last = parseInt(lastShown);

        const diffDays = (now - last) / (1000 * 60 * 60 * 24);

        return diffDays > DAYS_HIDE;
    }

    function markPopupShown() {
        localStorage.setItem(POPUP_KEY, new Date().getTime());
    }

    function showPopup() {

        if (!canShowPopup()) return;

        popup.classList.add("active");
        document.body.style.overflow = "hidden";

        markPopupShown();
    }

    function closePopup() {

        popup.classList.remove("active");
        document.body.style.overflow = "auto";

    }

    window.closePopup = closePopup;

    /* -----------------------------
       SCROLL 60%
    ------------------------------*/

    let scrollTriggered = false;

    window.addEventListener("scroll", function () {

        if (scrollTriggered) return;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercent = scrollTop / docHeight;

        if (scrollPercent > 0.6) {

            scrollTriggered = true;
            showPopup();

        }

    });

    /* -----------------------------
       EXIT INTENT

    document.addEventListener("mouseleave", function (e) {

        if (e.clientY <= 0) {
            showPopup();
        }

    });
    ------------------------------*/

    /* -----------------------------
       FECHAR CLICANDO FORA
    ------------------------------*/

    popup.addEventListener("click", function (e) {

        if (e.target === popup) {
            closePopup();
        }

    });

});






// FORMSPREE
function submitFeedback(button) {

    const mensagem = document.getElementById("otherText").value.trim();

    if (mensagem === "") {
        alert("Escreva sua mensagem primeiro.");
        return;
    }

    button.disabled = true;
    button.innerText = "Enviando...";

    fetch("https://formspree.io/f/xojkaapa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            mensagem: mensagem,
            pagina: window.location.href,
            data: new Date().toISOString()
        })
    })

    .then(response => {

        document.getElementById("mainContent").style.display = "none";
        document.getElementById("successMessage").classList.add("active");

    })

    .catch(() => {

        alert("Erro ao enviar. Tente novamente.");

        button.disabled = false;
        button.innerText = "Enviar feeback";

    });

}






document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.innerText = "Enviando...";

    const data = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if(response.ok){

            window.location.href = "/obrigado";

        }else{

            alert("Erro ao enviar. Tente novamente.");
            button.disabled = false;
            button.innerText = "Agendar consultoria gratuita";

        }

    } catch {

        alert("Erro de conexão.");
        button.disabled = false;
        button.innerText = "Agendar consultoria gratuita";

    }

});

});