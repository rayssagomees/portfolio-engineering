var footer = document.createElement('footer');
const dateFooter = new Date();
const fullYearFooter = dateFooter.getFullYear();
const contentFooter = `© ${fullYearFooter} ${authorName}${rightsLicense}`;
footer.innerText = contentFooter;
document.body.appendChild(footer);