// Una vez el user dé Iniciar Sesión 
document
  .getElementById("form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtenemos los elementos de error para email y password
    const errorEmail = document.getElementById("error-email");
    const errorPassword = document.getElementById("error-password");

    // Se crea el objeto usuario
    const usuarioInicio = {
      email: email.value,
      password: passwordInput.value,   
    };

    // crea o toma los valores del array usuarios
    let Usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Valida si el usuario existe buscando con email
    const usuarioBuscado = Usuarios.find(
      (usuario) => usuario.email === usuarioInicio.email
    );
    if (!usuarioBuscado) {
      errorEmail.textContent = "No existe usuario con ese correo."; // Mostrar el error de correo
      errorEmail.classList.remove("d-none", "alert-success");
      errorEmail.classList.add("alert-danger");
      return;
    }
    
    if (atob(usuarioBuscado.password) !== usuarioInicio.password) {
      errorPassword.textContent = "La contraseña es incorrecta."; // Mostrar el error de contraseña
      errorPassword.classList.remove("d-none", "alert-success");
      errorPassword.classList.add("alert-danger");
      return;
    }

    // Si todo está bien, ocultamos los errores 
    errorEmail.classList.add("d-none");
    errorPassword.classList.add("d-none");

    // Guardar usuario logueado
    localStorage.setItem("isLoggedIn", 'true');

    // resetea el formulario
    document.getElementById("form-login").reset();

    // Lo envia a la pagina de inicio
    window.location.href = "../html/index.html";
  });

// Obtener elementos del DOM
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

// Agregar evento de clic para alternar la visibilidad de la contraseña
togglePassword.addEventListener('click', function () {
    // Verifica si el campo de contraseña está en modo "password"
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Cambiar a texto para mostrar la contraseña
        togglePassword.textContent = '🙈'; // Cambiar el ícono a un "ojo cerrado"
    } else {
        passwordInput.type = 'password'; // Cambiar a password para ocultar la contraseña
        togglePassword.textContent = '👁️'; // Cambiar el ícono a un "ojo abierto"
    }
});