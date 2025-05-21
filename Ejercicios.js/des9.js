// Destructuración de un objeto con el operador de propagación
const persona3 = { nombre: "Pedro", edad: 35, ciudad: "Valencia", pais: "España" }; 
const { nombre: nombrePersona3, ...restoPersona } = persona3;
console.log("Nombre de la persona: ", nombrePersona3); // Pedro 
console.log("Resto de la persona: ", restoPersona); // { edad: 35, ciudad: "Valencia", pais: "España" }