
function procesar() {
    // Obtener datos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = parseInt(document.getElementById("edad").value);
    const dias = parseInt(document.getElementById("dias").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);

    if (dias > 30 || dias < 0 || isNaN(dias) || isNaN(sueldo)) {
        alert("Ingrese días válidos (0 a 30) y un sueldo correcto.");
        return;
    }

    const sueldoDiario = sueldo / 30;
    const montoPagar = sueldoDiario * dias;

    const mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";

    // Formatear salida numerica
    const montoFormateado = montoPagar.toLocaleString("es-ES", {
        style: "currency",
        currency: "USD"
    });

    mensaje.textContent = `Empleado ${nombre} ${apellido}, 
                          debe recibir ${montoFormateado} por ${dias} días trabajados.`;

    // Ocultar mensaje después de 5 segundos y limpiar formulario
    setTimeout(() => {
        mensaje.style.display = "none";
        document.getElementById("formulario").reset();
    }, 5000);
}

// Agregar evento al botón
const boton = document.getElementById("boton");
boton.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    procesar(); //llamado completo a la función procesar
});

