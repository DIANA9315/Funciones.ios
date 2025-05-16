// Objeto Literal para un Auto
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Rojo",
  electrico: false,
  kilometraje: 15000
};

// Objeto Literal para una Persona
const persona = {
  nombre: "Juan Pérez",
  edad: 30,
  genero: "Masculino",
  casado: true,
  nacionalidad: "Argentina"
};

// Objeto Literal para un Producto
const producto = {
  nombre: "Laptop",
  marca: "Dell",
  precio: 1200,
  stock: 50,
  disponible: true
};

console.log("Valores de Object.keys(auto):",Object.keys(auto))
console.log("Valores de Object.entries(auto):",Object.entries(auto))


// Imprimir propiedades y valores del objeto Auto
if (Object.keys(auto).length === 0) {
  console.log("Auto está vacío.");
} else {
  console.log("\nPropiedades de Auto:");
  for (const [propiedad, valor] of Object.entries(auto)) {
    console.log(`${propiedad}: ${valor}`);
  }
}

// Imprimir propiedades y valores del objeto Persona
if (Object.keys(persona).length === 0) {
  console.log("Persona está vacía.");
} else {
  console.log("\nPropiedades de Persona:");
  for (const [propiedad, valor] of Object.entries(persona)) {
    console.log(`${propiedad}: ${valor}`);
  }
}

// Imprimir propiedades y valores del objeto Producto
if (Object.keys(producto).length === 0) {
  console.log("Producto está vacío.");
} else {
  console.log("\nPropiedades de Producto:");
  for (const [propiedad, valor] of Object.entries(producto)) {
    console.log(`${propiedad}: ${valor}`);
  }
}
