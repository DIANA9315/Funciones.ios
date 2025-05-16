// Arreglo para números
const numeros = [];

// Función para agregar un número al arreglo
function agregarNumero(valor) {
  const num = Number(valor);
  if (!isNaN(num)) {
    numeros.push(num);
    console.log(`Número ${num} agregado.`);
  } else {
    console.log("Valor inválido. No se agregó ningún número.");
  }
}

// Función para buscar un número en el arreglo
function buscarNumero(valor) {
  const num = Number(valor);
  if (numeros.includes(num)) {
    console.log(`Número ${num} encontrado en el arreglo.`);
  } else {
    console.log(`Número ${num} NO encontrado en el arreglo.`);
  }
}

// Función para listar el arreglo
function listarArreglo() {
  if (numeros.length === 0) {
    console.log("El arreglo está vacío.");
  } else {
    console.log("Contenido del arreglo:");
    for (const i in numeros) {
      console.log(`Posición ${i}: ${numeros[i]}`);
    }
  }
}

// Función para eliminar el último número del arreglo
function eliminarUltimo() {
  if (numeros.length === 0) {
    console.log("El arreglo está vacío. No hay elementos para eliminar.");
  } else {
    const eliminado = numeros.pop();
    console.log(`Número ${eliminado} eliminado del arreglo.`);
  }
}

// Función para mostrar menú y gestionar opciones
function mostrarMenu() {
  let continuar = true;

  while (continuar) {
    const opcion = prompt(
      "Menú:\n" +
      "1. Agregar un número\n" +
      "2. Buscar un número\n" +
      "3. Listar el arreglo\n" +
      "4. Eliminar el último número\n" +
      "0. Salir\n" +
      "Elige una opción:"
    );

    switch (opcion) {
      case "1":
        const valorAgregar = prompt("Ingresa el número a agregar:");
        agregarNumero(valorAgregar);
        break;
      case "2":
        const valorBuscar = prompt("Ingresa el número a buscar:");
        buscarNumero(valorBuscar);
        break;
      case "3":
        listarArreglo();
        break;
      case "4":
        eliminarUltimo();
        break;
      case "0":
        continuar = false;
        console.log("Saliendo del programa.");
        break;
      default:
        console.log("Opción no válida, intenta nuevamente.");
    }
  }
}

// Ejecutar el menú
mostrarMenu();
