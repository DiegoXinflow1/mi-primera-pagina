document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})

function showAlert() { alert('¡Hola, bienvenido,\
debe logguearse para continuar con el acceso'); }
// backslashe sirve para continuar el texto en la linea siguiente .css//

const form = document.getElementById('myForm')

form.addEventListener('submit', function(event) {
event.preventDefault()
validateForm();
})

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email')
    const email = emailInput.value

    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.')
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}


function sumar(num1, num2) {
    return num1 +num2;
}
let resultado = sumar(2, 3);
console.log(resultado);// resultado: 5
// clase 7 diseño responsive


