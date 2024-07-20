

class Productos {
	constructor(productos) {
		this.lista = productos;
	}

	agregarProducto(producto) {
		if (!this.yaExisteId(producto.id)) {
			this.lista.push(producto);
			return true;
		}
		return false;
	}

	cargarEjemplos() {
		this.lista = [
			new Producto('0001', 'COMPUTADORAS', 'LAPTOP ASUS', 65000, 8),
			new Producto('0002', 'COMPUTADORAS', 'DESKTOP HP', 75000, 10),
			new Producto('0003', 'CELULARES', 'SAMSUNG GALAXY S21', 60000, 15),
			new Producto('0004', 'TABLETS', 'IPAD AIR', 40000, 20),
			new Producto('0005', 'COMPUTADORAS', 'LAPTOP DELL', 70000, 12),
			new Producto('0006', 'COMPUTADORAS', 'MINI PC LENOVO', 50000, 7),
			new Producto('0007', 'CELULARES', 'IPHONE 12', 80000, 5),
			new Producto('0008', 'TABLETS', 'SAMSUNG GALAXY TAB S7', 55000, 10),
		];
	}

	yaExisteId(id) {
		return this.lista.some((producto) => producto.id.includes(id));
	}

	buscarId(id) {
		return this.lista.find((producto) => producto.id.toUpperCase() === id.toUpperCase());
		//return this.lista.find((producto) => producto.id.includes(id));
	}

	incrementarPrecios(porcentaje) {
		this.lista.forEach((producto) => (
			producto.precio = ((producto.precio * porcentaje) / 100) + producto.precio
		));
	}

	filtrarProductos(busqueda) {
		const result = this.lista.filter((producto) => (producto.nombre.toUpperCase().indexOf(busqueda) != -1 || producto.rubro.toUpperCase().indexOf(busqueda) != -1));
		return result;
	}

	eliminarProducto(id) {
		let indice = this.lista.findIndex((producto) => producto.id.toUpperCase() === id.toUpperCase());
		if(indice != -1){
			this.lista.splice(indice, 1);
			return true;
		}
		return false;
	}

}