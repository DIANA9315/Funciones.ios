//Programa para evaluar las notas de un alumno y genere un mensaje personalizado 
//seguún su rango (10-9 Excelente, 8-7 Bien, 6-5 Suficiente o menos de 5 No aprueba) 
const nota = Number(prompt("Introduzaca su nota: ")); 
if (nota <=10 && nota >= 9) { 
console.log("Su nota es excelente"); 
} else if(nota <9 && nota >=7) { 
console.log("Su nota es buena"); 
} else if(nota <7 && nota >=5) { 
console.log("Su nota es Suficiente"); 
} else { 
console.log("No aprueba"); 
} 
//Ejercicio 2: 
//Programa que evalua una nota de diez alumnos y genere un mensaje personalizado 
//segun su rango (10-9 Excelente, 8-7 Bien, 6-5 Suficiente o menos de 5 No aprueba), Cuente 
//la cantidad de alumnos según su segmento y el promedio de nota general de la sección 
//(Resolver sin arreglos y los datos deben ser solicitados por teclado) 
let contador = 1 //contador para controlar el ciclo while 
let totalNotas = 0; //acumulador para sacar el promedio general 
 
//contadores para conteo de cada tipo de nota 
let cantidadExcelente = 0; 
let cantidadBuenas = 0; 
let cantidadSuficiente = 0; 
let cantidadNoApruba = 0; 
 
while (contador <=10) { 
    const nombre = prompt("Ingrese el nombre del alumno: "); 
    const nota = Number(prompt("Ingrese la nota de " + nombre + ": ")); 
 
    totalNotas +=nota; // acumula las notas 
 
    if (nota <=10 && nota >8) { 
        console.log(nombre + " tiene una nota de: " + nota + ". Su nota es excelente."); 
        cantidadExcelente++; 
    } 
    else if (nota <=8 && nota >6) { 
        console.log(`${nombre} tiene una nota de ${nota}. Su nota es buena.`); 
        cantidadBuenas++; 
    } 
    else if(nota <=6 && nota >=5) { 
        console.log(`${nombre} tiene una nota de ${nota}. Su nota es suficiente.`); 
        cantidadSuficiente++; 
    } 
    else { 
console.log(`${nombre} tiene una nota de  ${nota}. No aprueba.`); 
cantidadNoApruba++; 
} 
contador++; 
} 
console.log("Total de alumnos con nota excelente: " + cantidadExcelente); 
console.log("Total de alumnos con nota buena: " + cantidadBuenas) 
console.log("Total de alumnos con nota suficiente: " + cantidadSuficiente) 
console.log("Total de alumnos que no aprueban: " + cantidadNoApruba); 
let promedioNotas = totalNotas/10; 
console.log("El promedio general de notas es: " + promedioNotas); 
//Ejercicio 3: 
/*3er Ejercicio. Crear una versión del ejercicio anterior, pero usando 2 arreglos en uno 
tendrá los nombres de alumnos y el otro su respectiva nota, ambos de 10 posiciones, ya 
con los datos precargados, imprimir listado de alumnos nombre, nota y en que rango esta 
como en el 1er ejercicio 
*/ 
//Arreglo de los nombres de los alumnos 
const nombreAlumno = ["Luis", "Alberto", "Mendoza", "Ramon", "Gaby", "Cedric", 
"Nestor", "Juanita", "Ariadne", "Gianna"]; 
 
//Arreglo de las notas de los alumnos 
const notasAlumnos = [10,9,8,7,6,5,4,3,2,1]; 
 
for (let i=0; i < nombreAlumno.length; i++) { 
    const nombre = nombreAlumno[i]; 
    const nota = notasAlumnos[i]; 
    let evaluacion = ""; 

    if (nota <=10 && nota >8) { 
        evaluacion = "Su nota es excelente"; 
    } else if (nota <9 && nota >6) { 
        evaluacion = "Su nota es buena"; 
    } else if (nota <7 && nota >5) { 
        evaluacion = "Su nota es suficiente"; 
    } else { 
        evaluacion = "No aprueba"; 
    } 
    console.log(`La nota de ${nombre} es ${nota}. Evaluacion: ${evaluacion}`);