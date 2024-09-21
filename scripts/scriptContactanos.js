function alerta() {
 let name = document.getElementById('nombre').value.trim();
 let lastName = document.getElementById('lastName').value.trim();
 let phone = document.getElementById('phone').value.trim();
 let email = document.getElementById('email').value.trim();
 let message = document.getElementById('message').value.trim();


 if(name === ""){
    alert('el nombre esta vacio')
    return false;
 }
 if (lastName ===""){
    alert('el apellido esta vacio')
    return false;

 } if (phone ===""){
    alert("falta el numero de telefono")
    return false;
 } if ( email === ""){
    alert('falta el correo')
    return false;
 } if (message ===""){
    alert('escribir el mensaje')
    return false;
 }
 return true;
    
} 