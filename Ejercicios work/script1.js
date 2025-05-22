const empleados = [
  {
    empleado: "Ana García",
    cargo: "Programador",
    salario: 3200,
    imagen: "img/img1.png"
  },
  {
    empleado: "Luis Fernández",
    cargo: "DevOps",
    salario: 4000,
    imagen: "img/img2.png"
  },
  {
    empleado: "Carlos Ruiz",
    cargo: "UX",
    salario: 2900,
    imagen: "img/img3.jpg"
  },
  {
    empleado: "Laura Méndez",
    cargo: "Soporte",
    salario: 2500,
    imagen: "img/img4.jpg"
  },
  {
    empleado: "María López",
    cargo: "Programador",
    salario: 3500,
    imagen: "img/img5.jpg"
  },
  {
    empleado: "Diego Torres",
    cargo: "DevOps",
    salario: 4200,
    imagen: "img/img6.jpg"
  }
];

// Version usando solo innerHTML para insertar coddigo dinamico HTML

let html = ""; // Acumulador de código HTML

console.log("Valor de html antes del for: ", html);

for (let i = 0; i < empleados.length; i++) {
  const emp = empleados[i];
  html += `
    <div class="card">
      <img src="${emp.imagen}" alt="${emp.empleado}">
      <h3>${emp.empleado}</h3>
      <p><strong>Cargo:</strong> ${emp.cargo}</p>
      <p><strong>Salario:</strong> $${emp.salario} USD</p>
    </div>
  `;
    console.log("Valor de html que se construye dentro del for: ", html);
}

console.log("Valor final de html despues del for: ", html);


// Pintamos todo de golpe en el contenedor
document.getElementById("galeria").innerHTML = html;
