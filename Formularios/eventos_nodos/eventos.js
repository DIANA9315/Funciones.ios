// Función común para cambiar el fondo
function setBackground(color) {
  document.body.style.backgroundColor = color;
}

// selecciona todos los checkboxes con la clase colorCheck
const checkboxes = document.querySelectorAll('.colorCheck');
console.log("Valor de checkboxes: ", checkboxes);

//metodo forEach para un ciclo for sobre arreglo de check creado con querySelectorAll
checkboxes.forEach((checkbox) => {

  // Agregar un evento de clic a cada checkbox en caso de suceder
  // Checkboxes: solo uno activo al mismo tiempo (para evitar múltiples selecciones)
  checkbox.addEventListener('click', (e) => {

    // Desmarca todos los demás check
    document.querySelectorAll('.colorCheck').forEach(cb => {
      if (cb !== e.target) cb.checked = false;
    });

    // Verifica el checkbox marcado
    // Si está marcado, cambia el fondo al color correspondiente
    if (e.target.checked) {
      console.log("Valor de checkbox que quedo marcado: ", e.target.value);
      setBackground(e.target.value);
    } else {
      setBackground('white'); // reset si desmarcado
    }

  });

});

// Selecciona todos los radio buttons con los input de nombre colorRadio
const radioButtons = document.querySelectorAll('input[name="colorRadio"]');
console.log("Valor de radioButtons: ", radioButtons);

// Recorre todo los Radio buttons y el que tenga valor marcado con el evento de click
// toma el valor seleccionado
radioButtons.forEach((radio) => {
  radio.addEventListener('click', (e) => {
    console.log("Valor de radio button que quedo marcado: ", e.target.value);
    setBackground(e.target.value);
  });
});

// Select conectar con el html
const select = document.getElementById('colorSelect');
select.addEventListener('change', (e) => {
  console.log("Valor de select que fue seleccionado: ", e.target.value);
  if (e.target.value) {
    setBackground(e.target.value);
  } else {
    setBackground('white');
  }
});

// Evento Click sobre los botones
const buttons = document.querySelectorAll('.colorButton');
console.log("Valor de botones: ", buttons);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log("Valor de boton individual: ", button);
    console.log("Evento del boton marcado: ", e);
    console.log("Valor del boton que fue seleccionado: ", e.target.value);
    setBackground(e.target.value);
  });
});
