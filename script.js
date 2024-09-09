// Selecciona el menú y el ícono de hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Añade el evento para mostrar/ocultar el menú al hacer clic en el ícono de hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
