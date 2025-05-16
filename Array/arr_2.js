// Declaración de los arreglos vacíos
const numeros = [];
const textos = [];

// Función declarativa para agregar un valor al arreglo numérico
function agregarNumero(valor) {
  if (!isNaN(valor) && valor !== "") {
    numeros.push(Number(valor));
  } else {
    console.log("El valor ingresado no es un número válido.");
  }
}

// Función declarativa para agregar un valor al arreglo de strings
function agregarTexto(valor) {
  if (valor.trim() !== "") {
    textos.push(valor);
  } else {
    console.log("El valor ingresado no es un texto válido.");
  }
}

// Función declarativa para listar los elementos de un arreglo, validando si está vacío
function listarArreglo(arreglo, nombreArreglo) {
  if (arreglo.length === 0) {
    console.log(`${nombreArreglo} está vacío.`);
  } else {
    console.log(`\nContenido de ${nombreArreglo}:`);
    for (const indice in arreglo) {
      console.log(`Posición ${indice}: ${arreglo[indice]}`);
    }
  }
}

// --- Ciclo para ingreso de datos ---
let continuar = true;//while ===tru

while (continuar) {
  const tipo = prompt("¿Qué tipo de dato quieres agregar? (1 = Número, 2 = Texto)");
  
  if (tipo === "1") {
    const valor = prompt("Ingresa un número:");
    agregarNumero(valor);
  } else if (tipo === "2") {
    const valor = prompt("Ingresa un texto:");
    agregarTexto(valor);
  } else {
    console.log("Opción no válida.");
  }
  
  const decision = prompt("¿Quieres continuar agregando datos? (0 = Salir, 1 = Seguir)");
  continuar = decision === "1";
}

// --- Imprimir los arreglos ---
listarArreglo(numeros, "Arreglo de Números");
listarArreglo(textos, "Arreglo de Textos");
