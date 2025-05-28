// conectamos con elementos de entrada y salida DOM
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

// Definimos los caracteres que se pueden usar en la contraseña
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}<>?';

//Evento Click en el botón de generar contraseña
generateBtn.addEventListener('click', () => {
  // Obtenemos el valor de longitud de la contraseña
  const length = parseInt(lengthEl.value);
  // Tomamos la cadena de minusculas como base
  let characters = lowercaseChars;

  // Si los checkboxes están marcados, concatenamos los caracteres correspondientes
  // quedamos con una sola cadena de caracteres
  if (uppercaseEl.checked) characters += uppercaseChars;
  if (numbersEl.checked) characters += numberChars;
  if (symbolsEl.checked) characters += symbolChars;

  // Valor inicial del password
  let password = '';

  console.log('Longitud de la contraseña:', length);
  console.log('Caracteres disponibles:', characters);
  // Ciclo que toma como base la longitud de la contraseña
  for (let i = 0; i < length; i++) {
    // Generamos un índice aleatorio entre 0 y la longitud de la cadena de caracteres
    const randomIndex = Math.floor(Math.random() * characters.length);
    console.log('Índice aleatorio generado:', randomIndex);
    console.log('Carácter seleccionado:', characters[randomIndex]);
    // Agregamos el carácter seleccionado a la contraseña
    // y lo concatenamos a la variable password
    password += characters[randomIndex];
  }

  // Asignamos la contraseña generada al elemento de entrada
  // y la mostramos en el DOM
  passwordEl.value = password;
});


// Evento Click en el botón de copiar contraseña
// Copiamos el valor de la contraseña al portapapeles
copyBtn.addEventListener('click', () => {
  if (!passwordEl.value) return;
  navigator.clipboard.writeText(passwordEl.value);
  copyBtn.textContent = '✔️';
  setTimeout(() => (copyBtn.textContent = '📋'), 1000);
});
