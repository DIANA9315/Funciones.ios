// Destructuración de un array con valores por defecto
const numeros4 = [1, 2]; // Falta el tercer elemento
const [primero4, segundo4, tercero4 = 0] = numeros4; // Tercero por defecto 0
console.log("1era posicion de arreglo como variable: ", primero4); // 1 
console.log("2da posicion de arreglo como variable: ", segundo4); // 2
console.log("3era posicion de arreglo como variable: ", tercero4); // 0