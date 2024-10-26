// Function to load external HTML into a div
function includeHTML() {
    document.getElementById("header").innerHTML = fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById("header").innerHTML = data
          renderUserButton();
      });

    document.getElementById("footer").innerHTML = fetch('footer.html')
      .then(response => response.text())
      .then(data => document.getElementById("footer").innerHTML = data);
}

// Call the function
includeHTML();


// Función para renderizar el botón según el estado de autenticación
function renderUserButton() {
    const userButton = document.getElementById('user-button');

    // Verificamos si el usuario está autenticado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Limpiamos el contenido del div
    userButton.innerHTML = '';

    if (isLoggedIn) {
        // Nombre de usuario logueado
        const userLogged = localStorage.getItem('userLogger');

        // Si el usuario está logueado, mostramos el botón de logout
        userButton.innerHTML = `
            <div class="d-flex align-items-center">
                <h4 class="m-0 mx-2 text-white">Hola, ${userLogged.split(' ')[0] || ''}</h4>
                <a id="logout-button" class="cursor-pointer" title="Cerrar sesión">
                    <img src="../img/shared/log-out.png" alt="Icono Usario">
                </a>
            </div>
        `;

        // Agregamos el evento para cerrar sesión
        document.getElementById('logout-button').addEventListener('click', function() {
            let resultado = confirm("¿Estás seguro de que deseas cerrar sesión?");
            if (resultado) {
                localStorage.setItem('isLoggedIn', 'false');
                localStorage.removeItem('userLogger');
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

