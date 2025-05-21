// Destructuración con renombrado
const auto = { marca: "Toyota", modelo: "Corolla", año: 2022 }; 
const { marca: marcaAuto, modelo: modeloAuto } = auto;
console.log("Marca del auto: ", marcaAuto); // Toyota       
console.log("Modelo del auto: ", modeloAuto); // Corolla