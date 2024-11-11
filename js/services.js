// Función para volver al inicio
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón al hacer scroll hacia abajo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const myBtn = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}
