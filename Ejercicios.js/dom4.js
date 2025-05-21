const productos = [
  { nombre: "Laptop", marca: "Dell", precio: 1200, stock: 10, importado: true },
  { nombre: "Celular", marca: "Samsung", precio: 800, stock: 25, importado: true },
  { nombre: "Teclado", marca: "Logitech", precio: 100, stock: 50, importado: false },
  { nombre: "Monitor", marca: "LG", precio: 300, stock: 15, importado: true },
  { nombre: "Mouse", marca: "Microsoft", precio: 50, stock: 60, importado: false },
  { nombre: "Impresora", marca: "HP", precio: 200, stock: 12, importado: true },
  { nombre: "Auriculares", marca: "Sony", precio: 150, stock: 40, importado: true },
  { nombre: "Tablet", marca: "Apple", precio: 900, stock: 20, importado: true },
  { nombre: "Router", marca: "TP-Link", precio: 80, stock: 30, importado: false },
  { nombre: "Disco Duro", marca: "Seagate", precio: 120, stock: 22, importado: true }
];

const contenedorProductos = document.querySelector("#productos");

const colores = ["red", "green", "blue", "orange", "purple", "brown", "teal", "magenta", "navy", "maroon"];
const tamaños = [16, 18, 20, 22, 24, 26, 28, 30, 32, 34];

for (const [i, producto] of productos.entries()) {
  const p = document.createElement("p");

  // Texto con datos del producto
  p.textContent = `${producto.nombre} (${producto.marca}) - $${producto.precio} - Stock: ${producto.stock} - Importado: ${producto.importado ? "Sí" : "No"}`;

  // Estilos
  p.style.color = colores[i % colores.length];
  p.style.fontSize = tamaños[i % tamaños.length] + "px";

  contenedorProductos.appendChild(p);
}

// Suma y promedio de precios con acumulador normal
let totalPrecio = 0;
for (const producto of productos) {
  totalPrecio += producto.precio;
}
const promedioPrecio = totalPrecio / productos.length;

const contenedorResultado = document.querySelector("#resultado");

const totalElem = document.createElement("p");
totalElem.textContent = `Total precio: $${totalPrecio.toFixed(2)}`;
totalElem.style.color = "darkblue";
totalElem.style.fontSize = "24px";

const promedioElem = document.createElement("p");
promedioElem.textContent = `Promedio precio: $${promedioPrecio.toFixed(2)}`;
promedioElem.style.color = "darkgreen";
promedioElem.style.fontSize = "20px";

contenedorResultado.appendChild(totalElem);
contenedorResultado.appendChild(promedioElem);
