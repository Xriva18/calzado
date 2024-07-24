function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("zapatillas"));
    console.log(memoria);
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("zapatillas", JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = memoria.findIndex(zapatilla => zapatilla.id === producto.id);
        console.log(indiceProducto);
        const nuevoMemoria = memoria;
        if (indiceProducto === -1) {
            nuevoMemoria.push(getNuevoProductoParaMemoria(producto));
        } else {
            nuevoMemoria[indiceProducto].cantidad++;
        }
        localStorage.setItem("zapatillas", JSON.stringify(nuevoMemoria));
    }
    actualizarNumeroCarrito();
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