// Objeto Literal para un Auto
const auto = {
  marca: "Toyota",//stringe
  modelo: "Corolla",
  año: 2022,
  color: "Rojo",
  electrico: false,//boolean
  kilometraje: 15000//number
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

// Objeto Literal vacio
const objetoVacio = {};

// Imprimir los objetos en consola
console.log("Auto:", auto);
console.log("Persona:", persona);
console.log("Producto:", producto);
console.log("Objeto Vacio:", objetoVacio);

// Imprimir propiedades con notacion punto del objeto Auto
console.log("\nPropiedades del objeto Auto:");
console.log("Marca:", auto.marca);
console.log("Modelo:", auto.modelo);
console.log("Año:", auto.año);
console.log("Color:", auto.color);
console.log("Eléctrico:", auto.electrico);
console.log("Kilometraje:", auto.kilometraje);
// Imprimir propiedades con notacion corchete del objeto Persona
console.log("\nPropiedades del objeto Persona:");
console.log("Nombre:", persona["nombre"]);  
console.log("Edad:", persona["edad"]);
console.log("Género:", persona["genero"]);
console.log("Casado:", persona["casado"]);
console.log("Nacionalidad:", persona["nacionalidad"]);
// Imprimir propiedades con notacion combinada del objeto Producto
console.log("\nPropiedades del objeto Producto:");
console.log("Nombre:", producto.nombre);    
console.log("Marca:", producto["marca"]);
console.log("Precio:", producto.precio);
console.log("Stock:", producto["stock"]);
console.log("Disponible:", producto.disponible);






