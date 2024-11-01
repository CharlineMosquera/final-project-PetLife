const baseURL = "http://localhost:8080/api/login";
let nombreUsuario;

// Validación para el correo electrónico
document.getElementById("email").addEventListener("input", function () {
  const email = this.value.trim(); // Guardamos el valor ingresado, eliminando cualquier espacio extra al principio o final (trim)
  const errorEmail = document.getElementById("error-email");
  const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // Regex para verificar si el formato del correo electrónico es válido

  // Si el correo no cumple con el patrón:
  if (!emailPattern.test(email)) {
    errorEmail.textContent = "Ingresa un correo electrónico válido."; // Mostramos el error
    errorEmail.classList.remove("d-none", "alert-success");
    errorEmail.classList.add("alert-danger");
  } else {
    // Si el correo es válido:
    errorEmail.classList.remove("alert-danger"); // Ocultamos el mensaje de error
    errorEmail.classList.add("alert-success");
    errorEmail.textContent = "¡Correo electrónico válido!"; // Añadimos mensaje de validación exitosa
    errorEmail.classList.remove("d-none");
  }
});

/* Cuando de click en el Boton de Iniciar Sesion */
document
  .getElementById("form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Se crea el objeto usuario
    const usuarioInicio = {
      email: email.value,
      contrasenia: btoa(password.value),
    };

    exponerDatos("get", usuarioInicio);

    // Guardar usuario logueado
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userLogger", nombreUsuario);

    // resetea el formulario
    document.getElementById("form-login").reset();

    // Lo envia a la pagina de inicio
    window.location.href = "../html/index.html";
  });

// Obtener elementos del DOM
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

// Agregar evento de clic para alternar la visibilidad de la contraseña
togglePassword.addEventListener("click", function () {
  // Verifica si el campo de contraseña está en modo "password"
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Cambiar a texto para mostrar la contraseña
    togglePassword.textContent = "🙈"; // Cambiar el ícono a un "ojo cerrado"
  } else {
    passwordInput.type = "password"; // Cambiar a password para ocultar la contraseña
    togglePassword.textContent = "👁️"; // Cambiar el ícono a un "ojo abierto"
  }
});

async function exponerDatos(metodo, usuario) {
  try {
    let response = await fetch(`${baseURL}/iniciar-sesion`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      throw new Error("Error al iniciar sesion.");
    }
    const cliente = await response.json(); // Parsea la respuesta como JSON
    nombreUsuario = cliente.nombre_cliente;
  } catch (error) {}
}
