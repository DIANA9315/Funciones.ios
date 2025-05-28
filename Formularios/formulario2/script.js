const datos = [];



function procesar() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = parseInt(document.getElementById("edad").value);
  const activo = document.getElementById("activo").checked;
  const nacionalidad = document.getElementById("nacionalidad").value;

  if (!nombre || !apellido || !edad || !nacionalidad) {
    alert("Por favor completa todos los campos requeridos.");
    return;
  }

  const usuario = { nombre, apellido, edad, activo, nacionalidad };
  datos.push(usuario);

  alert("Datos procesados correctamente.");
  document.getElementById("formulario").reset();
}

function listar() {
  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = "";

  if (datos.length === 0) {
    contenedor.textContent = "No hay datos registrados.";
    return;
  }

  // Encabezado
  const encabezado = document.createElement("div");
  encabezado.classList.add("fila", "encabezado");
  encabezado.innerHTML = `
    <div>Nombre</div>
    <div>Apellido</div>
    <div>Edad</div>
    <div>Activo</div>
    <div>Nacionalidad</div>
  `;
  contenedor.appendChild(encabezado);

  // Filas
  datos.forEach((d) => {
    const fila = document.createElement("div");
    fila.classList.add("fila");
    fila.innerHTML = `
      <div>${d.nombre}</div>
      <div>${d.apellido}</div>
      <div>${d.edad}</div>
      <div>${d.activo ? "Sí" : "No"}</div>
      <div>${d.nacionalidad}</div>
    `;
    contenedor.appendChild(fila);
  });
}

// Evento al cargarse todo en el DOM
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const btnProcesar = document.getElementById("btnProcesar");
  const btnListar = document.getElementById("btnListar");

  btnProcesar.addEventListener("click", procesar);
  btnListar.addEventListener("click", listar);

  formulario.addEventListener("reset", () => {
    document.getElementById("resultado").innerHTML = "";
  });
});
