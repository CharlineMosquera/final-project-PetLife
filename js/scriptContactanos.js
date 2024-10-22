// llamamos la funcion alerta y creamos las variales y un getelementbyid para traer los id del form del html contactanos

function alerta() {
   // Obtención de valores
   let name = document.getElementById('nombre').value.trim();
   let lastName = document.getElementById('lastName').value.trim();
   let phone = document.getElementById('phone').value.trim();
   let email = document.getElementById('email').value.trim();
   let message = document.getElementById('message').value.trim();

   // Obtener elementos de alerta
   let errorNombre = document.getElementById('error-nombre');
   let errorLastName = document.getElementById('error-lastName');
   let errorPhone = document.getElementById('error-phone');
   let errorEmail = document.getElementById('error-email');
   let errorMessage = document.getElementById('error-message');

   // Validar campo Nombre
   if (name === "") {
       errorNombre.textContent = "Por favor, ingresa tu nombre.";
       errorNombre.classList.remove("d-none");
       return false;
   } else {
       errorNombre.classList.add("d-none");
   }

   // Validar campo Apellido
   if (lastName === "") {
       errorLastName.textContent = "Por favor, ingresa tu apellido.";
       errorLastName.classList.remove("d-none");
       return false;
   } else {
       errorLastName.classList.add("d-none");
   }

   // Validar campo Teléfono
   let regexPhone = /^[0-9]+$/;
   if (phone === "") {
       errorPhone.textContent = "Por favor, ingresa tu número de teléfono.";
       errorPhone.classList.remove("d-none");
       return false;
   } else if (!regexPhone.test(phone)) {
       errorPhone.textContent = "El número de teléfono es incorrecto. Solo se permiten números.";
       errorPhone.classList.remove("d-none");
       return false;
   } else {
       errorPhone.classList.add("d-none");
   }

   // Validar campo Email
   let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   if (email === "") {
       errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
       errorEmail.classList.remove("d-none");
       return false;
   } else if (!emailRegex.test(email)) {
       errorEmail.textContent = "El correo electrónico no es válido.";
       errorEmail.classList.remove("d-none");
       return false;
   } else {
       errorEmail.classList.add("d-none");
   }

   // Validar campo Mensaje
   if (message === "") {
       errorMessage.textContent = "Por favor, ingresa un mensaje.";
       errorMessage.classList.remove("d-none");
       return false;
   } else {
       errorMessage.classList.add("d-none");
   }

   // Mostrar mensaje de éxito
   let messageSent = document.getElementById('message-sent');
   messageSent.textContent = "¡Mensaje enviado con éxito!";
   messageSent.classList.remove("d-none");
   
   return true; // Permitir el envío del formulario si todo está correcto
}
