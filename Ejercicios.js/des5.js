// Destructuración de un array con el operador de propagación
const numeros1 = [1, 2, 3, 4, 5];   
const [primero1, ...resto] = numeros1;
console.log("1era posicion de arreglo como variable: ", primero1); // 1
console.log("Resto del arreglo: ", resto); // [2, 3, 4, 5]
const numeros2 = [1, 2, 3, 4, 5];
const [primero2, segundo2, ...resto2] = numeros2;
console.log("1era posicion de arreglo como variable: ", primero2); // 1
console.log("2da posicion de arreglo como variable: ", segundo2); // 2
console.log("Resto del arreglo: ", resto2); // [3, 4, 5]