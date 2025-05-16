// Objeto literal tipo array de autos
const autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
    electrico: false,
    precio: 20000
  },
  {
    marca: "Honda",
    modelo: "Civic",
    año: 2023,
    color: "Azul",
    electrico: false,
    precio: 22000
  },
  {
    marca: "Tesla",
    modelo: "Model 3",
    año: 2024,
    color: "Blanco",
    electrico: true,
    precio: 35000
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    año: 2025,
    color: "Rojo",
    electrico: false,
    precio: 27000
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

// Calcular la cantidad de autos por color
const cantidadPorColor = {};
let sumaPrecios = 0;

for (const auto of autos) {
  const { color, precio } = auto; // Destructuracion
  cantidadPorColor[color] = (cantidadPorColor[color] || 0) + 1;
  sumaPrecios += precio;
}

// Imprimir cantidad de autos por color
console.log("\nCantidad de autos por color:");
for (const color in cantidadPorColor) {
  console.log(`${color}: ${cantidadPorColor[color]}`);
}

// Calcular y mostrar el precio promedio
const promedioPrecio = (sumaPrecios / autos.length).toFixed(2);
console.log(`\nPrecio promedio de los autos: $${promedioPrecio}`);
