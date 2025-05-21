// Arreglo de alumnos
const alumnos = ["Ana", "Luis", "Marta", "Carlos", "Sofía"];

// Arreglo de materias
const materias = ["Matemáticas", "Historia", "Biología", "Inglés", "Física"];

// Matriz de calificaciones (cada subarreglo corresponde a un alumno)
const calificaciones = [
  [8, 7, 9, 6, 10],  // Ana
  [6, 8, 7, 9, 7],   // Luis
  [9, 9, 8, 10, 8],  // Marta
  [7, 6, 6, 8, 9],   // Carlos
  [10, 9, 10, 9, 10] // Sofía
];

// Crear arreglo de objetos
const resultados = [];

for (let i = 0; i < alumnos.length; i++) {
  for (let j = 0; j < materias.length; j++) {
    resultados.push({
      alumno: alumnos[i],
      materia: materias[j],
      nota: calificaciones[i][j]
    });
  }
}

// Imprimir el arreglo de resultados
console.log(resultados);

// Con el arreglo de resultados, puedes realizar operaciones como 
// calcular el promedio de cada alumno 
// calcular el promedio por materia
// Cantidad de Alumnos con promedio mayor a 8
