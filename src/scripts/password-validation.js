const loginForm = document.forms['loginform'];
const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password-login');
const emailLog = document.getElementById('log-email');
const passwordLog = document.getElementById('log-psw');

function validateEmail(email) {
    return email === 'giaco@kinetic-admin.com';
}

function validatePassword(password) {
    return password === 'admin12kinetic';
}

function validation() {
    let isValid = true;

    emailLog.textContent = '';
    passwordLog.textContent = '';

    if (!emailInput.value.trim()) {
        emailLog.textContent = 'El campo no puede estar vacío';
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailLog.textContent = 'El correo no es correcto';
        isValid = false;
    }

    if (!passwordInput.value.trim()) {
        passwordLog.textContent = 'La contraseña es requerida';
        isValid = false;
    } else if (!validatePassword(passwordInput.value)) {
        passwordLog.textContent = 'La contraseña no es correcta';
        isValid = false;
    }

    return isValid;
}