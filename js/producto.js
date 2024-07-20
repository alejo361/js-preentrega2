class Producto {
    constructor(id, nombre, rubro, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.rubro = rubro;
        this.precio = precio;
        this.stock = stock;
    }

    nuevoProducto() {
        this.id = solicitarDato('cadena', 'Ingrese el ID del producto');
        this.rubro = solicitarDato('cadena', 'Ingrese la rubro del producto');
        this.nombre = solicitarDato('cadena', 'Ingrese el nombre del producto');
        this.precio = solicitarDato('numeroEntero', 'Ingrese el precio del producto');
        this.stock = solicitarDato('numeroEntero', 'Ingrese el stock disponible del producto');
    }

    editarProducto() {
        this.rubro = solicitarDato('cadena', 'Ingrese la rubro del producto', this.rubro);
        this.nombre = solicitarDato('cadena', 'Ingrese el nombre del producto', this.nombre);
        this.precio = solicitarDato('numeroEntero', 'Ingrese el precio del producto', this.precio);
        this.stock = solicitarDato('numeroEntero', 'Ingrese el stock disponible del producto', this.stock);
    }
}
