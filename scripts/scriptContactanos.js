function alerta() {
 let name = document.getElementById('nombre').value.trim();
 let lastName = document.getElementById('lastName').value.trim();
 let phone = document.getElementById('phone').value.trim();
 let email = document.getElementById('email').value.trim();
 let message = document.getElementById('message').value.trim();


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
 
 let regex = /^[0-9]+$/;
 if (!regex.test(phone)) {
     alert('El número de teléfono es incorrecto. Solo se permiten números.');
     return false; // Prevenir el envío del formulario si el teléfono no es válido
 }
 
 
 if ( email === ""){
    alert('ingresa el correo')
    return false;
 } 
let emailRegex =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
if(!emailRegex.test(email)){
    alert('el correo es incorrecto');
    return false;
}

 
 
 if (message ===""){
    alert('escribir el mensaje')
    return false;
 }
 return true;
    
} 
