function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("zapatillas"));
    const tallaSeleccionada = document.getElementById("product-size").value; // Obtener la talla seleccionada
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        nuevoProducto.talla = tallaSeleccionada; // Incluir la talla en el producto
        localStorage.setItem("zapatillas", JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = memoria.findIndex(zapatilla => zapatilla.id === producto.id && zapatilla.talla === tallaSeleccionada);
        const nuevoMemoria = memoria;
        if (indiceProducto === -1) {
            const nuevoProducto = getNuevoProductoParaMemoria(producto);
            nuevoProducto.talla = tallaSeleccionada; // Incluir la talla en el producto
            nuevoMemoria.push(nuevoProducto);
        } else {
            nuevoMemoria[indiceProducto].cantidad++;
        }
        localStorage.setItem("zapatillas", JSON.stringify(nuevoMemoria));
    }
    actualizarNumeroCarrito();
    swal("Producto!", "Agregado al carrito", "success");
}


// toka un producto y le agrega 1
function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("zapatillas"));
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
}

actualizarNumeroCarrito();