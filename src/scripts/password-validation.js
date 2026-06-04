const myInput = document.getElementsByClassName('password-login');
const logValidation = document.getElementsByTagName('pre')

myInput.onkeyup = function() {
    let lowerCaseLetters = /[a-z]/g;
    let numberInside = /[0-9]/g;

    if (myInput.value.match(lowerCaseLetters)) {
        logValidation.textContent = `Valid`
    } else {
        logValidation.textContent = `Invalid`
    }

    if (myInput.value.match(numberInside)) {
        logValidation.textContent = `Valid`
    } else {
        logValidation.textContent = `Invalid`   
    }
}