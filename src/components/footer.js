var footer = document.createElement('footer');
const dateFooter = new Date();
const fullYearFooter = dateFooter.getFullYear();
const contentFooter = `© ${fullYearFooter} ${titlePage}${licenseFooter}`;
footer.innerText = contentFooter;
document.body.appendChild(footer);
