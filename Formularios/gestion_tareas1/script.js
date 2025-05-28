const tareas = [
  { tarea: "Diseñar página", tiempo: 5, valorHora: 15 },
  { tarea: "Codificar HTML", tiempo: 3, valorHora: 12 },
  { tarea: "Pruebas", tiempo: 2, valorHora: 10 }
];



function agregarTarea(evento) {
  evento.preventDefault();

  const tareaInput = document.getElementById("tarea");
  const tiempoInput = document.getElementById("tiempo");
  const valorInput = document.getElementById("valorHora");

  const tarea = tareaInput.value.trim();
  const tiempo = parseFloat(tiempoInput.value);
  const valorHora = parseFloat(valorInput.value);

  if (!tarea || isNaN(tiempo) || isNaN(valorHora) || tiempo <= 0 || valorHora < 0) {
    alert("Completa todos los campos correctamente.");
    return;
  }

  tareas.push({ tarea, tiempo, valorHora });

  tareaInput.value = "";
  tiempoInput.value = "";
  valorInput.value = "";

  renderTareas();
}

function renderTareas() {
  const contenedor = document.getElementById("listaTareas");
  contenedor.innerHTML = "";

  tareas.forEach((t, i) => {
    const fila = document.createElement("div");
    fila.className = "fila";

    fila.innerHTML = `
      <div class="col col-tarea">${t.tarea}</div>
      <div class="col col-tiempo">${t.tiempo}</div>
      <div class="col col-valor">$${t.valorHora}</div>
      <div class="col col-total">$${(t.tiempo * t.valorHora).toFixed(2)}</div>
      <div class="col col-accion"><button data-index="${i}">Eliminar</button></div>
    `;

    contenedor.appendChild(fila);
  });

  document.querySelectorAll(".col-accion button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      tareas.splice(index, 1);
      renderTareas();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", agregarTarea);
  renderTareas();
});
