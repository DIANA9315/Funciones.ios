// Array de objetos
const personas = [
  {
    nombre: "Ana",
    edad: 25,
    profesion: "Ingeniera",
    "país-de-origen": "México",
    "nivel_academico": "Maestría"
  },
  {
    nombre: "Luis",
    edad: 30,
    profesion: "Médico",
    "país-de-origen": "Argentina",
    "nivel academico": "Doctorado"
  }
];

// Contador para numerar cada persona
let contador = 1;

// Recorrer el array con for...of
for (const persona of personas) {
  console.log(`--- Persona ${contador} ---`);
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Profesión:", persona.profesion);
  console.log("País de origen:", persona.país-de-origen);
  console.log("Nivel académico:", persona.nivel academico);
  console.log("País de origen:", persona["país-de-origen"]);
  console.log("Nivel académico:", persona["nivel academico"]);
  contador++;
}
