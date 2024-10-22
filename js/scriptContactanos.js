// llamamos la funcion alerta y creamos las variales y un getelementbyid para traer los id del form del html contactanos
function contactanos() {
 let name = document.getElementById('nombre').value.trim();
 let lastName = document.getElementById('lastName').value.trim();
 let phone = document.getElementById('phone').value.trim();
 let email = document.getElementById('email').value.trim();
 let message = document.getElementById('message').value.trim();

// llamamos las variables y creamos la alerta indicando que si el id name tiene un string vacio crea una alerta donde indica que debe ingresar el nombre//
 if(name === ""){
    alert('ingrese el nombre')
    return false;
 }
 if (lastName ===""){
    alert('ingrese el apellido')
    return false;

 } if (phone ===""){
    alert("ingresa el numero de telefono")
    return false;
 }
 // creamos un regex donde indica que unicamente acepta caracteres de numero 
 let regex = /^[0-9]+$/;
 if (!regex.test(phone)) {
     alert('El número de teléfono es incorrecto. Solo se permiten números.');
     return false; // Prevenir el envío del formulario si el teléfono no es válido
 }
 
 
 if ( email === ""){
    alert('ingresa el correo')
    return false;
 } 

 // creamos un emailregex donde indica que acepta nombre luego un @// luego el . y luego el hotmailt y punto
let emailRegex =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
if(!emailRegex.test(email)){
    alert('el correo es incorrecto');
    return false;
}

 
 
 if (message ===""){
    alert('escribir el mensaje')
    return false;
 }
 // aqui realizmos el return true en caso que todas las condiciones se den enviaran el formulario

   alert('Mensaje enviado!')
   return true;
    
} 
