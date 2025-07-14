function Carrito() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function (nombre, precio) {
        this.productos.push({ nombre, precio });
        this.total += precio;
    };

    this.calcularDescuento = function () {
        if (this.total > 100) {
            let descuento = this.total * 0.10;
            console.log(`Descuento del 10%. Total: $${this.total - descuento}`);
        } else if (this.total > 50) {
            let descuento = this.total * 0.05;
            console.log(`Descuento del 5%. Total: $${this.total - descuento}`);
        } else {
            console.log(`Sin descuento. Total: $${this.total}`);
        }
    };
}

// Prueba:
let miCarrito = new Carrito();
miCarrito.agregarProducto("Camiseta", 40);
miCarrito.agregarProducto("Zapatos", 70);
miCarrito.calcularDescuento();