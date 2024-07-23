function agregarAlCarrito(producto) {
    const memoria = localStorage.getItem("zapatillas");
    console.log(memoria);
    if (!memoria) {
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("zapatillas", JSON.stringify([nuevoProducto]));

    }
}