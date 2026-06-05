import { VALID_CREDENTIALS } from './config.js';

export const validateEmail = (email) => {
    return email === VALID_CREDENTIALS.email;
};

export const validatePassword = (password) => {
    return password === VALID_CREDENTIALS.password;
};

export const isEmpty = (value) => {
    return !value.trim();
};