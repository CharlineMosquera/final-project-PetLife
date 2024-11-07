// llamamos la funcion alerta y creamos las variales y un getelementbyid para traer los id del form del html contactanos
/* Cuando de click en el Boton de Contactanos */
document
  .getElementById("form-contactanos")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById('nombre').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let errorName = document.getElementById("error-name");
    let errorLastname = document.getElementById("error-lastname");
    let errorPhone = document.getElementById("error-phone");
    let errorEmail = document.getElementById("error-email");
    let errorMessage = document.getElementById("error-message");

    // llamamos las variables y creamos la alerta indicando que si el id name tiene un string vacio crea una alerta donde indica que debe ingresar el nombre//
    if (name === "") {
      showError(errorName, "Ingrese el nombre")
      return false;
    }
    removeError(errorName, "¡Nombre válido!")

    if (lastName === "") {
      showError(errorLastname, "Ingrese el apellido")
      return false;
    }
    removeError(errorLastname, "¡Apellido válido!")

    if (phone === "") {
      showError(errorPhone, "Ingrese el número de teléfono")
      return false;
    }
    removeError(errorPhone, "¡Teléfono válido!")

    // creamos un regex donde indica que unicamente acepta caracteres de numero
    let regex = /^[0-9]+$/;
    if (!regex.test(phone)) {
      showError(errorPhone, 'El número de teléfono es incorrecto. Solo se permiten números.')
      return false; // Prevenir el envío del formulario si el teléfono no es válido
    }
    removeError(errorPhone, "¡Teléfono válido!")

    if (email === "") {
      showError(errorEmail, "Ingrese el correo")
      return false;
    }
    removeError(errorEmail, "¡Email válido!")

    // creamos un emailregex donde indica que acepta nombre luego un @// luego el . y luego el hotmailt y punto
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email)) {
      showError(errorEmail, "Ingresa un correo electrónico válido")
      return false;
    }
    removeError(errorEmail, "¡Email válido!")


    if (message === "") {
      showError(errorMessage, "Ingrese el mensaje")
      return false;
    }
    removeError(errorMessage, "¡Mensaje válido!")

    // aqui realizmos el return true en caso que todas las condiciones se den enviaran el formulario
    Swal.fire({
      title: 'Mensaje enviado!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      // Resetea el formulario
      document.getElementById("form-contactanos").reset();
      resetError(errorName);
      resetError(errorLastname);
      resetError(errorPhone);
      resetError(errorEmail);
      resetError(errorMessage);
    })
    return true;

  });

function showError(identifier, errorText) {
  identifier.textContent = errorText; // Mostramos el error
  identifier.classList.remove("d-none", "alert-success");
  identifier.classList.add("alert-danger");
}

function removeError(identifier, successError) {
  identifier.classList.remove("alert-danger"); // Ocultamos el mensaje de error
  identifier.classList.add("alert-success");
  identifier.textContent = successError; // Añadimos mensaje de validación exitosa
  identifier.classList.remove("d-none");
}

function resetError(identifier) {
  identifier.classList.remove("alert-danger"); // Ocultamos el mensaje de error
  identifier.classList.remove("alert-success"); // Ocultamos el mensaje de success
  identifier.classList.add("d-none"); // Ocultamos el componente
  identifier.textContent = ''; // Reinciamos el valor
}