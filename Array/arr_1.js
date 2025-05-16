// Declaración de los arreglos vacíos
const numeros = [];
const textos = [];

// Función declarativa para agregar un valor al arreglo numérico
function agregarNumero(valor) {//el argumento enviado 10 lo recibe el parametro valor
  if (typeof valor === 'number') { //condicional if 
    numeros.push(valor);//nuemros es un arreglo, push metodo
  } else {
    console.log("El valor ingresado no es un número.");
  }
}

// Función declarativa para agregar un valor al arreglo de strings
function agregarTexto(valor) {
  if (typeof valor === 'string') {//see scriba texto
    textos.push(valor);//aarreglo textos, push metodo
  } else {
    console.log("El valor ingresado no es un texto.");
  }
}

// Función declarativa para listar los elementos de un arreglo, validando si está vacío
function listarArreglo(arreglo, nombreArreglo) {
  if (arreglo.length === 0) {//longitud del arreglo sea=0
    console.log(`${nombreArreglo} está vacío.`);
  } else {
    console.log(`\nContenido de ${nombreArreglo}:`);
    for (const indice in arreglo) {
      console.log(`Posición ${indice}: ${arreglo[indice]}`);
    }
  }
}

// --- Ejemplo de uso ---
agregarNumero(10);
agregarNumero(25);
agregarTexto("Hola");
agregarTexto("Mundo");

// Listar los arreglos
listarArreglo(numeros, "Arreglo de Números");//lista funcion,argumentos dos,es un arreglo(variable),stringe
listarArreglo(textos, "Arreglo de Textos");
