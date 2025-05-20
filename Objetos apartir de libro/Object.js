
 class Libro {
    constructor(titulo, autor, _año, estado = 'disponible') {
        this.titulo = titulo;
        this.autor = autor;
        this.año = _año;
        this.estado = estado; // Por defecto 'disponible'
        this.capitulos = []; // Propiedad opcional para almacenar los capítulos
    }
    // Método para imprimir la información básica del libro
    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}.`);
    }
    // Métodos opcionales para gestionar capítulos
    agregarCapitulo(nombreCapitulo) {
        if (typeof nombreCapitulo === 'string' && nombreCapitulo.trim() !== '') {
            this.capitulos.push(nombreCapitulo.trim());
            console.log(`Capítulo "${nombreCapitulo}" agregado a "${this.titulo}".`);
        } else {
            console.warn("No se puede agregar un capítulo vacío o no válido.");
        }
    }
}


// --- Ejemplos de uso ---

// Crear un nuevo libro
const miLibro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
const miNovela = new Libro ("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);
// Imprimir la información básica del libro

miLibro.describirLibro();
miNovela.agregarCapitulo("De la condición y ejercicio del famoso hidalgo D. Quijote de la Mancha");
miNovela.agregarCapitulo("Que trata de la primera salida que de su lugar hizo el valeroso Don Quijote");
miNovela.agregarCapitulo("Donde se cuenta la graciosa manera que tuvo Don Quijote en armarse caballero");



