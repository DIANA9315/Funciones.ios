// Crear un objeto vacío
let persona = {};

// Imprimir el objeto vacío
console.log("Antes de agregar propiedades:", persona);

// Agregar tres propiedades distintas
persona.nombre = "Carlos";
persona.edad = 30;
persona.ocupacion = "Ingeniero";
persona["país_origen"] = "México";

// Imprimir el objeto después de agregar propiedades
console.log("Después de agregar propiedades:", persona);

//Modificar el valor de una propiedad
persona.edad += 10

// Eliminar una propiedad
delete persona["país_origen"];

// Imprimir el objeto luego de los cambios
console.log("Después de modificar edad y eliminar ocupacion:", persona);