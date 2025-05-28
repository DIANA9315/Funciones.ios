document.getElementById("empleadoForm").addEventListener("submit", function (e) {
  //e.preventDefault(); // evitar recarga

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const sueldo = document.getElementById("sueldo").value;
  const nacionalidad = document.getElementById("nacionalidad").value;
  const visa = document.getElementById("visa").checked ? "Sí" : "No";
  const hijos = document.getElementById("hijos").checked ? "Sí" : "No";

  const resultado = `
    <strong>Datos Procesados:</strong><br>
    Nombre: ${nombre} ${apellido}<br>
    Edad: ${edad}<br>
    Sueldo: $${sueldo}<br>
    Nacionalidad: ${nacionalidad}<br>
    Visa de Trabajo: ${visa}<br>
    Tiene Hijos: ${hijos}
  `;

  document.getElementById("resultado").innerHTML = resultado;
});

// Limpiar resultado al hacer reset
document.getElementById("empleadoForm").addEventListener("reset", function () {
  document.getElementById("resultado").innerHTML = "";
});

