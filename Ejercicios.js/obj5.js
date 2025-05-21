const autos = [
  { color: "rojo", precio: 10000 },
  { color: "azul", precio: 12000 },
  { color: "rojo", precio: 11000 }
];

let cantidadPorColor = {};
let sumaPrecios = 0;

for (const auto of autos) {
  const { color, precio } = auto; //Destructuring
  // Si el color no existe en el objeto, inicializarlo a 0, usa el valor de la propiedad color
  // para nombre de la propiedad en el objeto cantidadPorColor, y a su vez como contador
  // Si el color ya existe, incrementar su valor en 1
  cantidadPorColor[color] = (cantidadPorColor[color] || 0) + 1;
  sumaPrecios += precio;
}

console.log("Objeto con la cantidad Por Color: ", cantidadPorColor); // { rojo: 2, azul: 1 }
console.log("Totalizacion de precios de autos: ",sumaPrecios);      // 33000

// Destructuracion
const { rojo, azul } = cantidadPorColor;
console.log("Cantidad de autos rojos: ", rojo); // 2
console.log("Cantidad de autos azules: ", azul); // 1
