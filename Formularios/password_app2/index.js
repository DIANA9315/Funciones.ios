const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}<>?';

generateBtn.addEventListener('click', () => {
  const length = parseInt(lengthEl.value);
  let characters = lowercaseChars;
  if (uppercaseEl.checked) characters += uppercaseChars;
  if (numbersEl.checked) characters += numberChars;
  if (symbolsEl.checked) characters += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordEl.value = password;
});

copyBtn.addEventListener('click', () => {
  if (!passwordEl.value) return;
  navigator.clipboard.writeText(passwordEl.value);
  copyBtn.textContent = '✔️';
  setTimeout(() => (copyBtn.textContent = '📋'), 1000);
});
