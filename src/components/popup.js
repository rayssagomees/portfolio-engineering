

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("popupOverlay");

    function showPopup() {
        popup.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePopup() {
        popup.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    window.closePopup = closePopup;

    // abrir automático depois de 5s
    if (!sessionStorage.getItem("popupShown")) {
        setTimeout(showPopup, 5000);
        sessionStorage.setItem("popupShown", "true");
    }

    // detectar saída do mouse
    document.addEventListener("mouseleave", function (e) {
        if (e.clientY < 0) {
            showPopup();
        }
    });

    // fechar clicando fora
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            closePopup();
        }
    });

});

function submitFeedback() {

    const mensagem = document.getElementById("otherText").value;

    if (mensagem.trim() === "") {
        alert("Escreva sua mensagem.");
        return;
    }

    fetch("https://formspree.io/f/xojkaapa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            mensagem: mensagem
        })
    }).then(() => {

        document.getElementById("mainContent").style.display = "none";
        document.getElementById("successMessage").classList.add("active");

    });

}