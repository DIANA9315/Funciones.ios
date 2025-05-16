const LibrosLeidos= []
let conteoLibrosLeidos={};

function agregarLibro(titulo) {
    if("Añade un libro a la lista de libros leidos"){
        console.log (`'{titulo}' ha sido añadido a tu lista de libros leídos.`);
        LibrosLeidos.push(titulo);
        }
 }


function mostrarLibrosLeidos() {
if (LibrosLeidos.length > 0) {
console.log("\nTu lista de libros leidos es:");
for (const libro of LibrosLeidos) {
console.log (`- ,${libro}`);
}
} else {
    console.log("\n¡Aún no has leído ningún libro!.");
    }
        }

        //Ejemplo de uso

        agregarLibro("Caperucita");
        agregarLibro("Cenicienta");
        mostrarLibrosLeidos();

     
        