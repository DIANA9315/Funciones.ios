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

for (const producto of productos) {
  const p = document.createElement("p");

  p.textContent = `${producto.nombre} (${producto.marca}) - $${producto.precio} - 
                   Stock: ${producto.stock} - Importado: ${producto.importado ? "Sí" : "No"}`;

  // Color y tamaño fijo para todos
  p.style.color = "darkslateblue";
  p.style.fontSize = "18px";

  contenedorProductos.appendChild(p);
}

// Suma y promedio de precios
let totalPrecio = 0;
for (const producto of productos) {
  totalPrecio += producto.precio;
}
const promedioPrecio = totalPrecio / productos.length;

const contenedorResultado = document.querySelector("#resultado");

const totalElem = document.createElement("p");
totalElem.textContent = `Total precio: $${totalPrecio.toFixed(2)}`;
totalElem.style.color = "darkslateblue";
totalElem.style.fontSize = "20px";

const promedioElem = document.createElement("p");
promedioElem.textContent = `Promedio precio: $${promedioPrecio.toFixed(2)}`;
promedioElem.style.color = "darkslateblue";
promedioElem.style.fontSize = "20px";

contenedorResultado.appendChild(totalElem);
contenedorResultado.appendChild(promedioElem);
