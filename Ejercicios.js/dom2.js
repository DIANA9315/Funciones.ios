// Seleccionar elementos usando querySelector
const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#boton");

// Modificar el contenido con innerHTML
titulo.innerHTML = "<strong>Bienvenido al DOM</strong>";
parrafo.style.color = "blue";

// Agregar evento al botón
boton.addEventListener("click", function() {
  parrafo.innerHTML = "<em>¡Has hecho clic en el botón!</em>";
});
