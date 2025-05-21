const numeros = [12, 7, 22, 5, 9, 14, 3, 18, 10, 6];

const contenedorNumeros = document.querySelector("#numeros");

// Colores y tamaños predefinidos para variar
const colores = ["red", "green", "blue", "orange", "purple", "brown", "teal", 
                 "magenta", "navy", "maroon"];
const tamaños = [16, 18, 20, 22, 24, 26, 28, 30, 32, 34];

console.log("Números entries:", numeros.entries());

for (const [i, num] of numeros.entries()) {
  const span = document.createElement("span");
  span.textContent = num + " ";
  span.style.color = colores[i % colores.length];
  span.style.fontSize = tamaños[i % tamaños.length] + "px";
  contenedorNumeros.appendChild(span);
}

// Suma total con acumulador normal
let total = 0;
for (const num of numeros) {
  total += num;
}

// Calcular promedio
const promedio = total / numeros.length;

const contenedorResultado = document.querySelector("#resultado");

const totalElem = document.createElement("p");
totalElem.textContent = `Total: ${total}`;
totalElem.style.color = "darkblue";
totalElem.style.fontSize = "24px";

const promedioElem = document.createElement("p");
promedioElem.textContent = `Promedio: ${promedio.toFixed(2)}`;
promedioElem.style.color = "darkgreen";
promedioElem.style.fontSize = "20px";

contenedorResultado.appendChild(totalElem);
contenedorResultado.appendChild(promedioElem);
