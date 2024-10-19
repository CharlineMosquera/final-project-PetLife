// Función para renderizar el botón según el estado de autenticación
function renderUserButton() {
    const userButton = document.getElementById('user-button');

    // Verificamos si el usuario está autenticado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Limpiamos el contenido del div
    userButton.innerHTML = '';

    if (isLoggedIn) {
        // Si el usuario está logueado, mostramos el botón de logout
        userButton.innerHTML = `
            <a id="logout-button" title="Cerrar sesión">
                <img src="../img/shared/log-out.png" alt="Icono Usario">
            </a>
        `;

        // Agregamos el evento para cerrar sesión
        document.getElementById('logout-button').addEventListener('click', function() {
            let resultado = confirm("¿Estás seguro de que deseas cerrar sesión?");
            if (resultado) {
                localStorage.setItem('isLoggedIn', 'false');
                renderUserButton(); // Actualizamos el botón después de cerrar sesión

                // Lo envia a la pagina de inicio
                window.location.href = "../html/login.html";
            }
        });
    } else {
        // Si no está logueado, mostramos el botón de login
        userButton.innerHTML = `
            <a href="login.html" title="Ingresar">
                <img src="../img/shared/user-32.png" alt="Icono Usario">
            </a>
        `;
    }
}

// Llamamos a la función para renderizar el botón al cargar la página
renderUserButton();
