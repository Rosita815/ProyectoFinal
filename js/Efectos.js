document.addEventListener('DOMContentLoaded', () => {
  Transiciones()
})
  

function Transiciones() {
  ScrollReveal().reveal('.cabecera');
  ScrollReveal().reveal('.tarjetas', { delay: 500 });
  ScrollReveal().reveal('.tabla_Usuario', { delay: 500 });
  ScrollReveal().reveal('.tabla_Rick', { delay: 500 });
}
