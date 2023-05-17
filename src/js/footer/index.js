const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const ownerName = '<span style="font-weight: bold; color: #FFA500;">raysantori.com</span>';

const footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `${currentYear} &copy; ${ownerName}. Todos os direitos reservados.`;