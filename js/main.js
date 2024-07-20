const opcionesMenu = `
    Por favor ubique la consola en el costado inferior de la pantalla.
    Presione 1 para listar todos los productos.
    Presione 2 para agregar producto nuevo.
    Presione 3 para buscar productos.
    Presione 4 para incrementar todos los precios.
    Presione 5 para editar un producto.
    Presione 6 para eliminar un producto indicando el ID.
    Presione 0 para VOLVER o SALIR`;


let productos = new Productos();
productos.cargarEjemplos();
let parar = false;

do {
    let opcion = parseInt(prompt(opcionesMenu));
    switch (opcion) {
        case 0:
            /*alert("FIN. Para volver a ejecutar presion la tecla F5");
            parar = true;
            break;*/
        case 1:
            mostrarTabla(productos.lista);
            break;
        case 2:
            producto = new Producto();
            producto.nuevoProducto();
            if (productos.agregarProducto(producto)) {
                mostrarTabla(productos.lista);
            } else {
                console.log("Ya existe este producto en el inventario.");
            }
            break;
        case 3:
            let busqueda = solicitarDato('cadena', 'Ingrese la palabra o frase, se buscara en nombre y rubro');
            result = productos.filtrarProductos(busqueda);
            mostrarTabla(result);
            if (result.length == 0) {
                alert(`Su busqueda ${busqueda} arrojó 0 resultados`);
            }
            console.log(`Se encontraron ${result.length} resuldatos para su busqueda ${busqueda}`);
            break;
        case 4:
            productos.incrementarPrecios(solicitarDato('entero', 'Ingrese el porcentaje que quiere aplicar de autmento.'));
            break;
        case 5:
            producto = productos.buscarId(solicitarDato('cadena', 'Ingrese el ID del producto'));
            producto.editarProducto();
            break;
        case 6:
            let id = solicitarDato('cadena', 'Ingrese el ID del producto');
            if (productos.eliminarProducto(id)) {
                mostrarTabla(productos.lista);
            } else {
                console.log(`El producto con id ${id} no existe.`);
            }
            break;
        default:
            alert("Opción inexistente. Intente nuevamente.");
            break;
    }
    // Salimos cuando al usuario le de le gana
	if (confirm('Quiere salir del menu?')) {
		// Si le da a aceptar salimos del bucle
		break
	}
} while (!parar);


