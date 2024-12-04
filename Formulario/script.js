let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
let errorPassword = document.getElementById("errorPassword");


signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signIn.classList.add("disable");
    signUp.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signIn.classList.remove("disable");
    signUp.classList.add("disable");
}

// Validacion del formulariow
function validarFormulario() {
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  // Elementos de error
  let errorNombre = document.getElementById('errorNombre');
  let errorApellido = document.getElementById('errorApellido');
  let errorEmail = document.getElementById('errorEmail');
  let errorPassword = document.getElementById('errorPassword');
  let errorConfirmPassword = document.getElementById('errorConfirmPassword');

  // Validaciones
  let nombreValido = /^[a-zA-Z ]+$/.test(nombre);
  let apellidoValido = /^[a-zA-Z ]+$/.test(apellido);
  let emailValido = /\S+@\S+\.\S+/.test(email);
  let passwordValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$-_.,])/.test(password) && password.length >= 8;

  // Actualizar los mensajes de error
  errorNombre.textContent = nombreValido ? '' : 'Solo se permiten letras y espacios';
  errorApellido.textContent = apellidoValido ? '' : 'Solo se permiten letras y espacios';
  errorEmail.textContent = emailValido ? '' : 'Ingrese un correo electrónico válido';
  errorPassword.textContent = passwordValido ? '' : 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial (!$-_.,)';
  errorConfirmPassword.textContent = confirmPassword === password ? '' : 'Las contraseñas no coinciden';

  return nombreValido && apellidoValido && emailValido && passwordValido && confirmPassword === password;
}