const baseURL = "http://localhost:8080/api/registro";

// VALIDACIÓN PARA EL FORM DE REGISTRO

// Validación para el nombre
document.getElementById("nombre").addEventListener("input", function () {
  // Seleccionamos el id y añadimos un listener para que escuche cuando el usuario escriba
  const nombre = this.value.trim(); // Guardamos el valor ingresado
  const errorNombre = document.getElementById("error-nombre"); // Seleccionamos el párrafo que mostrará el mensaje de error

  // Si el campo está vacío:
  if (nombre === "") {
    errorNombre.textContent = "El nombre es obligatorio."; // Mostramos el error
    errorNombre.classList.remove("d-none", "alert-success"); // Removemos las clases del mensaje de success
    errorNombre.classList.add("alert-danger"); // Añadimos la clase del mensaje de error
  } else {
    errorNombre.classList.remove("alert-danger"); // Ocultamos el mensaje de error
    errorNombre.classList.add("alert-success"); // Mostramos el mensaje de éxito
    errorNombre.textContent = "¡Nombre válido!";
    errorNombre.classList.remove("d-none");
  }
});

// Validación para el apellido
document.getElementById("apellido").addEventListener("input", function () {
  // Seleccionamos el id y añadimos un listener para que escuche cuando el usuario escriba
  const apellido = this.value.trim(); // Guardamos el valor ingresado
  const errorApellido = document.getElementById("error-apellido"); // Seleccionamos el párrafo que mostrará el mensaje de error

  // Si el campo está vacío:
  if (apellido === "") {
    errorApellido.textContent = "El apellido es obligatorio."; // Mostramos el error
    errorApellido.classList.remove("d-none", "alert-success"); // Removemos las clases del mensaje de success
    errorApellido.classList.add("alert-danger"); // Añadimos la clase del mensaje de error
  } else {
    errorApellido.classList.remove("alert-danger"); // Ocultamos el mensaje de error
    errorApellido.classList.add("alert-success"); // Mostramos el mensaje de éxito
    errorApellido.textContent = "¡Apellido válido!";
    errorApellido.classList.remove("d-none");
  }
});

// Validación para el direccion
document.getElementById("direccion").addEventListener("input", function () {
  // Seleccionamos el id y añadimos un listener para que escuche cuando el usuario escriba
  const direccion = this.value.trim(); // Guardamos el valor ingresado
  const errorDireccion = document.getElementById("error-direccion"); // Seleccionamos el párrafo que mostrará el mensaje de error

  // Si el campo está vacío:
  if (direccion === "") {
    errorDireccion.textContent = "El dirección es obligatorio."; // Mostramos el error
    errorDireccion.classList.remove("d-none", "alert-success"); // Removemos las clases del mensaje de success
    errorDireccion.classList.add("alert-danger"); // Añadimos la clase del mensaje de error
  } else {
    errorDireccion.classList.remove("alert-danger"); // Ocultamos el mensaje de error
    errorDireccion.classList.add("alert-success"); // Mostramos el mensaje de éxito
    errorDireccion.textContent = "¡Dirección válida!";
    errorDireccion.classList.remove("d-none");
  }
});

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

// Validación para el teléfono
document.getElementById("phone").addEventListener("input", function () {
  const phone = this.value.trim();
  const errorPhone = document.getElementById("error-phone");
  const phonePattern = /^[0-9]{10}$/; // Regex para verificar si el formato del teléfono es válido

  // Si el número no cumple con el patrón:
  if (!phonePattern.test(phone)) {
    errorPhone.textContent =
      "Ingresa un número de teléfono válido de 10 dígitos."; // Mostramos el error
    errorPhone.classList.remove("d-none", "alert-success");
    errorPhone.classList.add("alert-danger");
  } else {
    errorPhone.classList.remove("alert-danger");
    errorPhone.classList.add("alert-success");
    errorPhone.textContent = "¡Número de teléfono válido!"; // Añadimos mensaje de validación exitosa
    errorPhone.classList.remove("d-none");
  }
});

// Validación para las contraseñas
document
  .getElementById("password-confirm")
  .addEventListener("input", function () {
    const password1 = document.getElementById("password").value;
    const password2 = this.value;
    const matchMessage = document.getElementById("match-message");
    const errorPassword = document.getElementById("error-password");

    // Validación de longitud para la contraseña
    if (password1.length < 8) {
      errorPassword.textContent =
        "La contraseña debe tener al menos 8 caracteres.";
      errorPassword.classList.remove("d-none", "alert-success");
      errorPassword.classList.add("alert-danger");
    } else if (password1.length > 14) {
      errorPassword.textContent =
        "La contraseña no puede exceder los 14 caracteres.";
      errorPassword.classList.remove("d-none", "alert-success");
      errorPassword.classList.add("alert-danger");
    } else {
      errorPassword.textContent = "";
      errorPassword.classList.add("d-none");
    }

    // Validación para verificar si las contraseñas coinciden
    if (password1 !== password2) {
      matchMessage.textContent = "Las contraseñas no coinciden.";
      matchMessage.classList.add("alert-danger");
    } else {
      matchMessage.textContent = "Las contraseñas coinciden.";
      matchMessage.classList.remove("d-none", "alert-danger");
      matchMessage.classList.add("alert-success");
    }
  });

// Cuando de click en el Boton de Crear Cuenta
document
  .getElementById("form-registro")
  .addEventListener("submit", async function (event) {
    event.preventDefault();


    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const direccion = document.getElementById("direccion");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    // Obtener las constaseñas y verificar si son iguales
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("password-confirm").value;
    const errorAccountCreation = document.getElementById(
      "error-accountcreation"
    );

    if (password1 !== password2) {
      errorAccountCreation.textContent =
        "Las contraseñas no coinciden. Asegúrate de ingresar la misma contraseña para crear tu cuenta.";
      errorAccountCreation.classList.remove("d-none", "alert-success");
      errorAccountCreation.classList.add("alert-danger");
      return; //Detenemos la ejecución si la contraseña no es igual
    } else {
      // Si las contraseñas coinciden, ocultamos el error
      errorAccountCreation.textContent = "";
      errorAccountCreation.classList.add("d-none");
    }

    // Se crea el objeto usuario
    const nuevoUsuario = {
      nombre_cliente: nombre.value,
      apellido_cliente: apellido.value,
      direccion: direccion.value,
      email: email.value,
      telefono: phone.value,
      contrasenia: btoa(password.value), // Cifra la contraseña
    };

    try {
      let response = await fetch(`${baseURL}/crear`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(Object.values(errorData)[0] || "Error al crear el usuario.");
      }

      // Muestra confirmacion de que se creo el usuario
      Swal.fire({
        title: "Usuario registrado con éxito",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // Resetea el formulario
        document.getElementById("form-registro").reset();

        // Lo envia a la pagina de login
        window.location.href = "../html/login.html";
      });

    } catch (error) {
      Swal.fire({
        title: "Hubo un problema al registrar el usuario",
        text: error,
        icon: "error"
      })
    }
  });

// Obtener elementos del DOM
const passwordInput = document.getElementById("password");
const passwordInputConfirm = document.getElementById("password-confirm");
const togglePassword = document.getElementById("toggle-password");
const togglePasswordConfirm = document.getElementById(
  "toggle-password-confirm"
);

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

// Agregar evento de clic para alternar la visibilidad de la contraseña de confirmacion
togglePasswordConfirm.addEventListener("click", function () {
  // Verifica si el campo de contraseña está en modo "password"
  if (passwordInputConfirm.type === "password") {
    passwordInputConfirm.type = "text"; // Cambiar a texto para mostrar la contraseña
    togglePasswordConfirm.textContent = "🙈"; // Cambiar el ícono a un "ojo cerrado"
  } else {
    passwordInputConfirm.type = "password"; // Cambiar a password para ocultar la contraseña
    togglePasswordConfirm.textContent = "👁️"; // Cambiar el ícono a un "ojo abierto"
  }
});