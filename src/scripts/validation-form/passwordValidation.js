import { DOM } from './domElement.js';
import { validateEmail, validatePassword, isEmpty } from './validator.js';
import { MESSAGES, showError, clearErrors } from './errorHandler.js'

export function validation() {
    let isValid = true;

    clearErrors([DOM.emailLog, DOM.passwordLog]);

    if(isEmpty(DOM.emailInput.value)) {
        showError(DOM.emailLog, MESSAGES.emailEmpty);
        isValid = false;
    } else if (!validateEmail(DOM.emailInput.value)) {
        showError(DOM.emailLog, MESSAGES.emailInvalid);
        isValid = false;
    }

    if(isEmpty(DOM.passwordInput.value)) {
        showError(DOM.passwordLog, MESSAGES.passwordEmpty);
        isValid = false;
    } else if (!validatePassword(DOM.passwordInput.value)) {
        showError(DOM.passwordLog, MESSAGES.passwordInvalid);
        isValid = false;
    }

    return isValid;
}

window.validation = validation; 