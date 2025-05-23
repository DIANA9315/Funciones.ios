    let codigo; // Variable para almacenar el valor numérico
    document.addEventListener("keydown", function(event) {
      console.log("Valor de event: ", event);

      const tecla = event.key.toLowerCase(); // Convertir a minúscula

      if (tecla.length === 1) {
        // Solo si es una tecla que representa un carácter
        codigo = tecla.charCodeAt(); // Obtiene el código ASCII
      } else {
        codigo = "No aplica (tecla especial)";
      }  

      //const codigo = event.charCodeAt(0);
      const mensajeDiv = document.getElementById("mensaje");
      let mensaje = "";

      // Letras a, b, c, d (sin importar mayúscula o minúscula)
      if (["a", "b", "c", "d"].includes(tecla)) {
        mensaje = `Pulsaste la letra: <strong>${event.key}</strong> (Código: ${codigo})`;
      }
      // Teclas especiales
      else if (event.key === "Enter") {
        mensaje = `Pulsaste la tecla: <strong>Enter</strong> (Código: ${codigo})`;
      }
      else if (event.key === "Escape") {
        mensaje = `Pulsaste la tecla: <strong>Escape</strong> (Código: ${codigo})`;
      }
      else if (event.key === "Delete") {
        mensaje = `Pulsaste la tecla: <strong>Supr</strong> (Código: ${codigo})`;
      }
      else {
        mensaje = `Otra tecla: <strong>${event.key}</strong> (Código: ${codigo})`;
      }

      mensajeDiv.innerHTML = mensaje;
    });
  