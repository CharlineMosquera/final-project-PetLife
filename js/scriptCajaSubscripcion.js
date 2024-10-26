// llamamos la funcion alerta y creamos las variales y un getelementbyid para traer los id del form del html contactanos
/* Cuando de click en el Boton de Contactanos */
document
  .getElementById("form-subscription")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let brand = document.getElementById('brand').value.trim();
    let size = document.getElementById('size').value.trim();
    let age = document.getElementById('age').value.trim();
    let notes = document.getElementById('notes').value.trim();

    let errorName = document.getElementById("error-name");
    let errorBrand = document.getElementById("error-brand");
    let errorSize = document.getElementById("error-size");
    let errorAge = document.getElementById("error-age");
    let errorNotes = document.getElementById("error-notes");

    // llamamos las variables y creamos la alerta indicando que si el id name tiene un string vacio crea una alerta donde indica que debe ingresar el nombre//
    if (name === "") {
      showError(errorName, "Ingrese el nombre de tu mascota")
      return false;
    }
    removeError(errorName, "¡Nombre válido!")

    if (brand === "") {
      showError(errorBrand, "Ingrese la raza de tu mascota")
      return false;
    }
    removeError(errorBrand, "¡Raza válida!")

    if (size === "") {
      showError(errorSize, "Ingrese el tamaño de tu mascota")
      return false;
    }
    removeError(errorSize, "¡Tamaño válido!")

    if (age === "") {
      showError(errorAge, "Ingrese la edad de tu mascota")
      return false;
    }
    removeError(errorAge, "¡Edad válida!")

    if (notes === "") {
      showError(errorNotes, "Ingrese notas de tu mascota")
      return false;
    }
    removeError(errorNotes, "¡Notas válidas!")

    // aqui realizmos el return true en caso que todas las condiciones se den enviaran el formulario
    Swal.fire({
      title: 'Información de tu mascota enviada!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      // Resetea el formulario
      document.getElementById("form-subscription").reset();
      resetError(errorName);
      resetError(errorBrand);
      resetError(errorSize);
      resetError(errorAge);
      resetError(errorNotes);
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
