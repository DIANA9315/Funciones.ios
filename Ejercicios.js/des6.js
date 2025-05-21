// Destructuración de un objeto anidado
const persona1 = {
  nombre: "Ana",
  direccion: {
    ciudad: "Barcelona",
    pais: "España"
  }
};
const { nombre: nombrePersona, direccion: { ciudad, pais } } = persona1;
console.log("Nombre de la persona: ", nombrePersona); // Ana    
console.log("Ciudad: ", ciudad); // Barcelona
console.log("País: ", pais); // España