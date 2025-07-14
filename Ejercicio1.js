function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado) {
            console.log(`El libro "${this.titulo}" ya está prestado.`);
        } else {
            this.prestado = true;
            console.log(`Has prestado el libro "${this.titulo}".`);
        }
    };
}


let miLibro = new Libro("El psicoanalista", "John Katzenbach");

miLibro.prestar(); 
miLibro.prestar();
