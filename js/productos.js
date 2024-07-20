

class Productos {
	constructor(productos) {
		this.lista = productos;
	}

	agregarProducto(producto) {
		if (this.validarIdUnico(producto.id)) {
			this.lista.push(producto);
			return true;
		}
		return false;
	}

	cargarEjemplos() {
		this.lista = [
			new Producto('0001', 'Computadoras', 'Notebook ASUS', 65000, 8),
			new Producto('0002', 'Computadoras', 'PC de Escritorio HP', 75000, 10),
			new Producto('0003', 'Celulares', 'Samsung Galaxy S21', 60000, 15),
			new Producto('0004', 'Tablets', 'iPad Air', 40000, 20),
			new Producto('0005', 'Computadoras', 'Laptop Dell', 70000, 12),
			new Producto('0006', 'Computadoras', 'Mini PC Lenovo', 50000, 7),
			new Producto('0007', 'Celulares', 'iPhone 12', 80000, 5),
			new Producto('0008', 'Tablets', 'Samsung Galaxy Tab S7', 55000, 10),
		];
	}

	validarIdUnico(id) {
		//return this.lista.includes(id);
		return this.lista.some((producto) => producto.id == id);
	}

	buscarId(id) {
		return this.lista.find((producto) => producto.id.toLowerCase() == id.toLowerCase());
	}

	incrementarPrecios(porcentaje) {
		this.lista.forEach((producto) => (
			producto.precio = ((producto.precio * porcentaje) / 100) + producto.precio
		));
	}

	filtrarProductos(busqueda) {
		const result = this.lista.filter((producto) => (producto.nombre.toLowerCase().indexOf(busqueda) != -1 || producto.rubro.toLowerCase().indexOf(busqueda) != -1));
		return result;
	}

	eliminarProducto(id) {
		let indice = this.lista.findIndex((producto) => producto.id.toLowerCase() === id.toLowerCase());
		if(indice != -1){
			this.lista.splice(indice, 1);
			return true;
		}
		return false;
	}

}