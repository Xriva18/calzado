$(document).ready(function () {
    verCarrito();
});

function verCarrito() {
    const productos = JSON.parse(localStorage.getItem("zapatillas"));

    if (productos && productos.length > 0) {
        $('#productos-container').show();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        productos.forEach((producto, index) => {
            var newTr2 = `
                <div class="m-5">Talla = ${producto.talla} y cantidad ${producto.cantidad}</div>
            `;
            $('#productos-container').append(newTr2);
        });
    } else {
        alert("No hay productos en el carrito.");
    }
}

function agregarAlCarrito(index) {
    console.log("Producto agregado al carrito:", index);
    // Aquí puedes añadir la lógica para agregar el producto al carrito
}
