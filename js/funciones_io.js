function solicitarDato(tipo, mensaje, sugerencia = '') {
    let dato;
    if (tipo == 'numero') {
        do {
            dato = parseFloat(prompt(mensaje, sugerencia));
        } while (isNaN(dato) || dato < 0);
    } else if (tipo == 'numeroEntero') {
        do {
            dato = parseInt(prompt(mensaje, sugerencia));
        } while (isNaN(dato) || dato < 0);
    } else if (tipo == 'cadena') {
        do {
            dato = prompt(mensaje, sugerencia).toLowerCase();
        } while (dato == '');
    }
    return dato;
}

function mostrarTabla(datos) {
    console.clear();
    console.table(datos);
}