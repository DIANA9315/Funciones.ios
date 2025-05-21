// Arreglo con nombres de países
const paises = ["Argentina", "Brasil", "Chile", "Perú", "Colombia"];

// Arreglo con las capitales correspondientes
const capitales = ["Buenos Aires", "Brasilia", "Santiago", "Lima", "Bogotá"];

// Arreglo con tamaños en kilómetros cuadrados
const tamanios = [2780400, 8515767, 756102, 1285216, 1141748];

// Construir el arreglo de objetos
const informacionPaises = [];

for (let i = 0; i < paises.length; i++) {
  informacionPaises.push({
    pais: paises[i],
    capital: capitales[i],
    tamaño: tamanios[i]
  });
}

// Imprimir el arreglo resultante
console.log(informacionPaises);

// Ejemplo de uso: calcular el tamaño promedio de todos los países
// en base al arreglo de resultados