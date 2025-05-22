const empleados = [
  {
    empleado: "Ana García",
    cargo: "Programador",
    salario: 3200,
    imagen: "/img/img1.png"
  },
  {
    empleado: "Luis Fernández",
    cargo: "DevOps",
    salario: 4000,
    imagen: "/img/img2.png"
  },
  {
    empleado: "Carlos Ruiz",
    cargo: "UX",
    salario: 2900,
    imagen: "/img/img3.jpg"
  },
  {
    empleado: "Laura Méndez",
    cargo: "Soporte",
    salario: 2500,
    imagen: "/img/img4.jpg"
  },
  {
    empleado: "María López",
    cargo: "Programador",
    salario: 3500,
    imagen: "/img/img5.jpg"
  },
  {
    empleado: "Diego Torres",
    cargo: "DevOps",
    salario: 4200,
    imagen: "/img/img6.jpg"
  }
];

const galeria = document.getElementById("galeria");

for (let i = 0; i < empleados.length; i++) {
  const emp = empleados[i];

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  console.log("Propiedad Ruta de Imagen: ",emp.imagen);

  img.src = emp.imagen;
  img.alt = emp.empleado;

  console.log("Valores actualizados etiqueta img: ",img);

  const nombre = document.createElement("h3");
  nombre.textContent = emp.empleado;

  const cargo = document.createElement("p");
  cargo.textContent = `Cargo: ${emp.cargo}`;

  const salario = document.createElement("p");
  salario.textContent = `Salario: $${emp.salario} USD`;

  card.appendChild(img);
  card.appendChild(nombre);
  card.appendChild(cargo);
  card.appendChild(salario);

  galeria.appendChild(card);
}
