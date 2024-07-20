const opcionesMenu = `
    Por favor ubique la consola en el costado inferior de la pantalla.
    Presione 1 para agregar producto nuevo.
    Presione 2 para buscar productos.
    Presione 3 para incrementar todos los precios.
    Presione 4 para editar un producto.
    Presione 5 para eliminar un producto indicando el ID.
    Presione 0 para VOLVER o SALIR`;

let productos = new Productos();
productos.cargarEjemplos();
let parar = false;
let vertabla = true;
do {
    let opcion = parseInt(prompt(opcionesMenu));
    switch (opcion) {
        case 0:
            parar = true;
            break;
        case 1:
            producto = new Producto();
            producto.nuevoProducto();
            if (!productos.agregarProducto(producto)) {
                console.log("%cYa existe este producto en el inventario.","color:red");
                vertabla = false;
            } 
            break;
        case 2:
            let busqueda = solicitarDato('cadena', 'Ingrese la palabra o frase, se buscara en nombre y rubro');
            result = productos.filtrarProductos(busqueda);
            mostrarTabla(result);
            vertabla = false;
            if (result.length == 0) {
                alert(`Su busqueda ${busqueda} arrojó 0 resultados`);
            }
            console.log(`Se encontraron %c${result.length} %cresultados para su busqueda %c${busqueda}`,"color:red;","color:black","color:green");
            break;
        case 3:
            productos.incrementarPrecios(solicitarDato('numeroEntero', 'Ingrese el porcentaje que quiere aplicar de aumento.'));
            break;
        case 4:
            producto = productos.buscarId(solicitarDato('cadena', 'Ingrese el ID del producto'));
            if(producto === undefined){
                console.log("%cNo se encontro el producto.","color:red")
                vertabla = false;
            }else{
                producto.editarProducto();
            }
            break;
        case 5:
            let id = solicitarDato('cadena', 'Ingrese el ID del producto');
            if (!productos.eliminarProducto(id)) {
                console.log(`El producto con id ${id} no existe.`);
                vertabla = false;
            }
            break;
        default:
            alert("Opción inexistente. Intente nuevamente.");
            break;
    }
    if(vertabla) {
        mostrarTabla(productos.lista);
    }
    vertabla = true;
} while (!parar);


