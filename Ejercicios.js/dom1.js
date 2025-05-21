// 1. Acceder a elementos del DOM
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");

// 2. Modificar contenido de elementos
titulo.textContent = "Bienvenido al DOM"; // modifica texto
parrafo.style.color = "blue"; // cambia color de texto

// 3. Agregar un evento al botón
boton.addEventListener("click", function() {
  parrafo.textContent = "¡Has hecho clic en el botón!";
});
