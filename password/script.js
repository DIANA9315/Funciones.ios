// --- Elementos del DOM ---
const passwordDisplay = document.getElementById('passwordDisplay');
const copyButton = document.querySelector('.copy-button');
const characterLengthSlider = document.getElementById('characterLength');
const lengthValueSpan = document.getElementById('lengthValue');
const includeUppercaseCheckbox = document.getElementById('includeUppercase');
const includeLowercaseCheckbox = document.getElementById('includeLowercase');
const includeNumbersCheckbox = document.getElementById('includeNumbers');
const includeSymbolsCheckbox = document.getElementById('includeSymbols');
const generateButton = document.querySelector('.generate-button');
const strengthText = document.getElementById('strengthText');
const strengthBars = document.querySelectorAll('.strength-meter .bar');

// --- Conjuntos de Caracteres ---
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+{}[]:;<>,.?/~';

let passwordLength = parseInt(characterLengthSlider.value); // Longitud inicial desde el slider

// --- Funciones de Utilidad ---

/**
 * Actualiza el valor de la longitud de la contraseña mostrada.
 */
function updateLengthValue() {
    passwordLength = parseInt(characterLengthSlider.value);
    lengthValueSpan.textContent = passwordLength;
}

/**
 * Genera una contraseña basada en las opciones seleccionadas.
 * @returns {string} La contraseña generada.
 */
function generatePassword() {
    let availableChars = '';
    let generatedPassword = '';
    let requiredChars = []; // Para asegurar que cada tipo seleccionado tenga al menos un caracter

    // Añadir caracteres a `availableChars` según las opciones seleccionadas
    if (includeUppercaseCheckbox.checked) {
        availableChars += uppercaseChars;
        requiredChars.push(getRandomChar(uppercaseChars));
    }
    if (includeLowercaseCheckbox.checked) {
        availableChars += lowercaseChars;
        requiredChars.push(getRandomChar(lowercaseChars));
    }
    if (includeNumbersCheckbox.checked) {
        availableChars += numberChars;
        requiredChars.push(getRandomChar(numberChars));
    }
    if (includeSymbolsCheckbox.checked) {
        availableChars += symbolChars;
        requiredChars.push(getRandomChar(symbolChars));
    }

    // Si no hay ninguna opción seleccionada o ningún caracter disponible
    if (availableChars === '') {
        passwordDisplay.value = '';
        updateStrength('ninguna'); // Actualizar la fuerza
        return '';
    }

    // Asegurar que la longitud mínima para los caracteres requeridos no exceda la longitud total
    if (requiredChars.length > passwordLength) {
        alert('La longitud de la contraseña es demasiado corta para incluir todos los tipos de caracteres seleccionados. Aumente la longitud o deseleccione opciones.');
        passwordDisplay.value = '';
        updateStrength('ninguna');
        return '';
    }

    // Añadir al menos un caracter de cada tipo seleccionado
    generatedPassword += requiredChars.join('');

    // Rellenar el resto de la contraseña con caracteres aleatorios de `availableChars`
    for (let i = generatedPassword.length; i < passwordLength; i++) {
        generatedPassword += getRandomChar(availableChars);
    }

    // Mezclar la contraseña para que los caracteres requeridos no estén siempre al principio
    generatedPassword = shuffleString(generatedPassword);

    passwordDisplay.value = generatedPassword;
    updateStrength(generatedPassword); // Actualizar la fuerza de la contraseña
    return generatedPassword;
}

/**
 * Obtiene un caracter aleatorio de un string dado.
 * @param {string} charSet - El conjunto de caracteres de donde elegir.
 * @returns {string} Un caracter aleatorio.
 */
function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
}

/**
 * Mezcla aleatoriamente los caracteres de un string.
 * @param {string} str - El string a mezclar.
 * @returns {string} El string mezclado.
 */
function shuffleString(str) {
    let array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
    }
    return array.join('');
}
