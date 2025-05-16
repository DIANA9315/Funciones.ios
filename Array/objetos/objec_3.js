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

// Función para imprimir propiedades y valores de un objeto
const imprimirObjeto = (obj, nombreObjeto) => {
  if (Object.keys(obj).length === 0) {
    console.log(`${nombreObjeto} está vacío.`);
  } else {
    console.log(`\nPropiedades de ${nombreObjeto}:`);
    for (const [propiedad, valor] of Object.entries(obj)) {
      console.log(`${propiedad}: ${valor}`);
    }
  }
};

// Imprimir cada objeto
imprimirObjeto(auto, "Auto");
imprimirObjeto(persona, "Persona");
imprimirObjeto(producto, "Producto");
