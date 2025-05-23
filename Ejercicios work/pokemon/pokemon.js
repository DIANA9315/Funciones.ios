 
    const pokemones = [ 
      { "weight": 15.2, "weakness": ["Fire", "Psychic", "Flying", "Ice"], "number": "001", "height": 28, "name": "Bulbasaur", "ThumbnailAltText": "Bulbasaur", "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png", "id": 1 },
      { "weight": 28.7, "weakness": ["Fire", "Psychic", "Flying", "Ice"], "number": "002", "height": 39, "name": "Ivysaur", "ThumbnailAltText": "Ivysaur", "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png", "id": 2 },
      { "weight": 9999, "weakness": ["Fire", "Psychic", "Flying", "Ice"], "number": "003", "height": 945, "name": "Venusaur", "ThumbnailAltText": "Venusaur", "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png", "id": 3 },
      { "weight": 18.7, "weakness": ["Water", "Ground", "Rock"], "number": "004", "height": 24, "name": "Charmander", "ThumbnailAltText": "Charmander", "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png", "id": 4 },
      { "weight": 41.9, "weakness": ["Water", "Ground", "Rock"], "number": "005", "height": 43, "name": "Charmeleon", "ThumbnailAltText": "Charmeleon", "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png", "id": 5 }
    ];

    const lista = document.getElementById("pokemon-list");

    console.log(" Arreglo: ",pokemones);
    console.log(" Longitud: ",pokemones.length);

    for (let i = 0; i < pokemones.length; i++) {
      const p = pokemones[i];

      const item = document.createElement("li");

      const img = document.createElement("img");
      img.src = p.ThumbnailImage;
      img.alt = "Imagen de "+p.ThumbnailAltText+" no se puede abrir";

      const info = document.createElement("div");
      info.className = "info";

      const nombre = document.createElement("div");
      nombre.textContent = `#${p.id} - ${p.name}`;

      const debilidades = document.createElement("div");
      debilidades.className = "weaknesses";
      debilidades.textContent = `Debilidades: ${p.weakness.join("-")}`;

      info.appendChild(nombre);
      info.appendChild(debilidades);

      item.appendChild(img);
      item.appendChild(info);

      lista.appendChild(item);
    }
  