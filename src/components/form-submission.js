// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
   e.preventDefault();
   alert('Obrigado pelo contato! Retornaremos em breve.');
   this.reset();
});