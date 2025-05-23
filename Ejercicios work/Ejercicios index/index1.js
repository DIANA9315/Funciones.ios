    // seleccionar una etiqueta de HTML, variable de alcance global
    const caja = document.getElementById("miCaja");

    // Funcion para acciones al evento click sobre la caja representada por el div
    function cambiarColor() {
      caja.style.color = "red";
      caja.textContent = "¡Hiciste clic!";
    }
    
    // Funcion para acciones al evento pasar mouse sobre la caja representada por el div
    function pasarMouse() {
      caja.style.fontSize = "30px";
      caja.textContent = "¡Estás encima!";
    }

    function retirarMouse() {
      caja.style.fontSize = "24px";
      caja.style.color = "black";
      caja.textContent = "Pasa el mouse";
    }

    // agregar un evento de clic sobre la caja representada por el div
    caja.addEventListener("click", cambiarColor);

    // agregar un evento de pasar el mouse sobre la caja representada por el div
    caja.addEventListener("mouseenter", pasarMouse);

    // agregar un evento de salir el mouse sobre la caja representada por el div
    caja.addEventListener("mouseleave", retirarMouse);
