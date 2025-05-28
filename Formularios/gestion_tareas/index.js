let tareas = [
  { tarea: "Diseñar página", tiempo: 5, valorHora: 15 },
  { tarea: "Codificar HTML", tiempo: 3, valorHora: 12 },
  { tarea: "Pruebas", tiempo: 2, valorHora: 10 }
];



function renderTareas() {
  const contenedor = document.getElementById("listaTareas");
  contenedor.innerHTML = "";

  tareas.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("tarea");

    const info = document.createElement("div");
    info.classList.add("tarea-info");
    info.innerHTML = `
      <strong>${item.tarea}</strong>
      <span>Horas: ${item.tiempo}</span>
      <span>Valor/Hora: $${item.valorHora}</span>
      <span>Total: $${item.tiempo * item.valorHora}</span>
    `;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => eliminarTarea(index);

    div.appendChild(info);
    div.appendChild(btnEliminar);
    contenedor.appendChild(div);
  });
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1);
  renderTareas();
}

document.addEventListener("DOMContentLoaded", () => {
  renderTareas();

  document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const tarea = document.getElementById("tarea").value;
    const tiempo = parseFloat(document.getElementById("tiempo").value);
    const valorHora = parseFloat(document.getElementById("valorHora").value);

    if (tarea && tiempo > 0 && valorHora >= 0) {
      tareas.push({ tarea, tiempo, valorHora });
      this.reset();
      renderTareas();
    } else {
      alert("Completa todos los campos correctamente.");
    }
  });
});
