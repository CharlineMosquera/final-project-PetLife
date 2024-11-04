// llamamos la funcion alerta y creamos las variales y un getelementbyid para traer los id del form del html contactanos
const baseURL = "http://localhost:8080/api";

/* Cuando de click en el Boton de Contactanos */
document
  .getElementById("form-subscription")
  .addEventListener("submit", async function (event) {
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


    const consultaMascota = {
      "nombreMascota": name,
      "raza": brand,
      "tamanio": size,
      "edad": age,
      "historialMedico": notes
    };

    try {
      let response = await fetch(`${baseURL}/mascotas/buscar-productos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultaMascota),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(Object.values(errorData)[0] || "Error al consultar mascota.");
      }

      // Muestra confirmacion de que se proceso bien
      Swal.fire({
        title: 'Información de tu mascota enviada!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        // Reinicia el formulario
        document.getElementById("form-subscription").reset();
        resetError(errorName);
        resetError(errorBrand);
        resetError(errorSize);
        resetError(errorAge);
        resetError(errorNotes);
      })

      const products = await response.json();
      displayProducts(products)

    } catch (error) {
      Swal.fire({
        title: "Hubo un problema al procesar la caja de subscripción de tu mascota",
        text: error,
        icon: "error"
      })
    }
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

// Mostrar los productos en el DOM
function displayProducts(products) {
  const recommendedContainer = document.getElementById('recommended-container');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('recommended-title');
  headerDiv.innerHTML = `
                <h3>Productos recomendados</h3>
    `;
  recommendedContainer.appendChild(headerDiv);


  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('col-md-4', 'mb-4');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <div class="card h-100">
        <img src="${product.imagen}" class="card-img-top" alt="${product.nombre_producto}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.nombre_producto}</h5>
          <p class="rating">⭐⭐⭐⭐⭐</p>
          <p class="price">${formatCurrency(product.precio)}</p>
          <button class="btn btn-primary add-to-cart d-none" data-id="${product.nombre_producto}">Agregar al carrito</button>
        </div>
       </div>`;
    recommendedContainer.appendChild(productDiv);

    productDiv.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
  });
}

function formatCurrency(value) {
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
  return formatter.format(value);
}