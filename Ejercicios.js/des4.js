// Destructuración en parámetros de función
function mostrarPersona({ nombre, edad }) {
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
}
mostrarPersona({ nombre: "Carlos", edad: 30 }); // Nombre: Carlos, Edad: 30