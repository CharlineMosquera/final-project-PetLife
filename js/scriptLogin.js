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

/* Cuando de click en el Boton de Crear Cuenta */
document
  .getElementById("form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Se crea el objeto usuario
    const usuarioInicio = {
      email: email.value,
      password: password.value,
    };

    // crea o toma los valores del array usuarios
    let Usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Valida si el usuario existe buscando con email
    const usuarioBuscado = Usuarios.find(
      (usuario) => usuario.email === usuarioInicio.email
    );
    if (!usuarioBuscado) {
      // si el usuario no existe muestra la alerta y sale de la funcion
      alert("No existe usuario con ese correo");
      return;
    }
    // Valida si la contraseña es correcta y desifra la contraseña guardada
    if (atob(usuarioBuscado.password) !== usuarioInicio.password) {
      alert("La contraseña es incorrecta");
      return;
    }

    // Muestra confirmacion de que ingreso
    alert("INICIO DE SESION EXITOSO");

    // Guardar usuario logueado
    localStorage.setItem("isLoggedIn", 'true');

    // resetea el formulario
    document.getElementById("form-login").reset();

    // Lo envia a la pagina de inicio
    window.location.href = "../html/index.html";
  });
