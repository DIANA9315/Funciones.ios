const equipos = [
      { nombre: "Manchester United", estadio: "Old Trafford", capacidad: 74879, socios: 150000, nomina: 210000000 },
      { nombre: "Manchester City", estadio: "Etihad Stadium", capacidad: 53400, socios: 120000, nomina: 230000000 },
      { nombre: "Liverpool", estadio: "Anfield", capacidad: 54074, socios: 135000, nomina: 200000000 },
      { nombre: "Chelsea", estadio: "Stamford Bridge", capacidad: 41837, socios: 110000, nomina: 190000000 },
      { nombre: "Arsenal", estadio: "Emirates Stadium", capacidad: 60704, socios: 125000, nomina: 180000000 },
      { nombre: "Tottenham", estadio: "Tottenham Hotspur Stadium", capacidad: 62850, socios: 100000, nomina: 175000000 },
      { nombre: "Newcastle", estadio: "St. James' Park", capacidad: 52305, socios: 95000, nomina: 160000000 },
      { nombre: "Aston Villa", estadio: "Villa Park", capacidad: 42785, socios: 87000, nomina: 140000000 },
      { nombre: "West Ham", estadio: "London Stadium", capacidad: 62500, socios: 91000, nomina: 150000000 },
      { nombre: "Brighton", estadio: "Amex Stadium", capacidad: 31800, socios: 60000, nomina: 120000000 }
    ];

    const contenedor = document.getElementById('contenido');

    let sumaCapacidad = 0;
    let sumaSocios = 0;

    for (let i = 0; i < equipos.length; i++) {
      const equipo = equipos[i];
      const fila = document.createElement('div');
      fila.className = 'fila';

      const nombre = document.createElement('div');
      nombre.textContent = equipo.nombre;

      const estadio = document.createElement('div');
      estadio.textContent = equipo.estadio;

      const capacidad = document.createElement('div');
      capacidad.textContent = equipo.capacidad.toLocaleString();

      const socios = document.createElement('div');
      socios.textContent = equipo.socios.toLocaleString();

      const nomina = document.createElement('div');
      nomina.textContent = `£${equipo.nomina.toLocaleString()}`;

      fila.appendChild(nombre);
      fila.appendChild(estadio);
      fila.appendChild(capacidad);
      fila.appendChild(socios);
      fila.appendChild(nomina);

      contenedor.appendChild(fila);

      // Acumuladores
      sumaCapacidad += equipo.capacidad;
      sumaSocios += equipo.socios;
    }

    const promedioCapacidad = (sumaCapacidad / equipos.length).toFixed(0);
    const promedioSocios = (sumaSocios / equipos.length).toFixed(0);

    const promedios = document.getElementById('promedios');
    promedios.innerHTML = `
      <span>🔢 Capacidad promedio de estadios: <strong>${Number(promedioCapacidad).toLocaleString()}</strong></span>
      <span>👥 Promedio de socios: <strong>${Number(promedioSocios).toLocaleString()}</strong></span>
    `;