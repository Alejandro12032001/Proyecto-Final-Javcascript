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

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        darkModeToggle.textContent = 'Modo Oscuro';
    }
});