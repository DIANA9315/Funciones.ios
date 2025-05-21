// Destructuración de un objeto con valores por defecto
const persona2 = { nombre: "Luis" }; // No se define el sexo
const { nombre: nombrePersona2, sexo = "Masculino" } = persona2; // Edad por defecto 18
console.log("Nombre de la persona: ", nombrePersona2); // Luis   
console.log("Sexo de la persona: ", sexo); // Masculino