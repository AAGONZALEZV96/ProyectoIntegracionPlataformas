document.addEventListener('DOMContentLoaded', () => {
    console.log('FERREMAS Front-end cargado.');

    // Ejemplo de validación básica para el formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const emailInput = document.getElementById('email');
            if (!emailInput.value.includes('@')) {
                alert('Por favor, introduce un email válido.');
                event.preventDefault(); // Detiene el envío del formulario
            }
            // Aquí podrías añadir más validaciones o el envío de datos a tu backend Django
        });
    }

    // Más adelante, aquí irán las funciones para cargar productos desde la API de Django
    // y otras interacciones dinámicas.
});