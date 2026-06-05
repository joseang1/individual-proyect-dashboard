export const MESSAGES = {
    emailEmpty: 'El campo no puede estar vacío',
    emailInvalid: 'El correo no es correcto',
    passwordEmpty: 'La contraseña debe tener 8 caracteres con 1 número',
    passwordInvalid: 'La contraseña no es correcta',
}

export const showError = (element, message) => {
    element.textContent = message;
};

export const clearErrors = (elements) => {
    elements.forEach(el => el.textContent = '');
};