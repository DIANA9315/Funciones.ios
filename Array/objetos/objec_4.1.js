// Objeto literal tipo array de autos
const autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
    electrico: false
  },
  {
    marca: "Honda",
    modelo: "Civic",
    año: 2023,
    color: "Azul",
    electrico: false
  },
  {
    marca: "Tesla",
    modelo: "Model 3",
    año: 2024,
    color: "Blanco",
    electrico: true
  }
];

// Imprimir el objeto completo
console.log("Objeto completo de autos:");
console.log(autos);

// Imprimir cada posición del array de autos
console.log("\nImpresión posición por posición:");
for (const indice in autos) {
  console.log(`Posición ${indice}:`, autos[indice]);
}
