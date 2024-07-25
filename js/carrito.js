$(document).ready(function () {
    verCarrito();
});

function verCarrito() {
    const productos = JSON.parse(localStorage.getItem("zapatillas"));

    if (productos && productos.length > 0) {
        $('#full-cart').show();
        $('#empty-cart').hide();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        $('#productos-table-body').empty(); // Limpia el contenedor para evitar duplicados

        productos.forEach((producto, index) => {
            var newTr2 = `
                <tr id="fila-producto-${index}">
                    <th scope="row" class="text-center"><i class="btn button bi bi-trash-fill text-danger borra-item" data-index="${index}"></i></th>
                    <td><img src="${producto.imagen1}" alt="Image" style="height: 50px;"></td>
                    <td>${producto.nombre}</td>
                    <td class="text-center">${producto.talla}</td>
                    <td class="text-center">
                        <div>
                            <button class="btn button bg-primary text-white btn-decrement" data-index="${index}">-</button>
                            <span class="ml-3 mr-3" id="cantidad-${index}">${producto.cantidad}</span>
                            <button class="btn button bg-primary text-white btn-increment" data-index="${index}">+</button>
                        </div>
                    </td>
                    <td class="text-center">$ <span id="precio-${index}">${producto.precio}</span></td>
                </tr>
            `;
            $('#productos-table-body').append(newTr2);
        });

        // Agrega eventos a los botones
        $('.btn-increment').on('click', function () {
            const index = $(this).data('index');
            actualizarCantidad(index, 1);
        });

        $('.btn-decrement').on('click', function () {
            const index = $(this).data('index');
            actualizarCantidad(index, -1);
        });

        $('.borra-item').on('click', function () {
            const index = $(this).data('index');
            eliminarProducto(index);
        });
        actualizarTotales();

    } else {
        $('#full-cart').hide();
        $('#empty-cart').show();
    }
}

function actualizarCantidad(index, cambio) {
    let productos = JSON.parse(localStorage.getItem("zapatillas"));

    if (productos && productos.length > 0) {
        let producto = productos[index];
        if (cambio === -1 || cambio === 1) {
            // Actualiza la cantidad del producto
            producto.cantidad += cambio;

            // Asegúrate de que la cantidad no sea menor que 1
            if (producto.cantidad < 1) {
                producto.cantidad = 1;
            }

            // Actualiza el localStorage
            localStorage.setItem("zapatillas", JSON.stringify(productos));

            // Actualiza la interfaz
            $(`#cantidad-${index}`).text(producto.cantidad);
            actualizarTotales();
            actualizarNumeroCarrito();
        }
    }
}

function eliminarProducto(index) {
    let productos = JSON.parse(localStorage.getItem("zapatillas"));

    if (productos && productos.length > 0) {
        // Elimina el producto del array
        actualizarNumeroCarrito();
        productos.splice(index, 1);

        // Actualiza el localStorage
        actualizarNumeroCarrito();
        localStorage.setItem("zapatillas", JSON.stringify(productos));

        // Redibuja el carrito
        verCarrito();
        actualizarNumeroCarrito();
    }
}

function actualizarTotales() {
    let productos = JSON.parse(localStorage.getItem("zapatillas"));
    let total = 0;

    if (productos && productos.length > 0) {
        productos.forEach((producto, index) => {
            let precio = parseFloat(producto.precio);
            let cantidad = parseInt(producto.cantidad);
            total += precio * cantidad;
        });
    }

    $('#precio-total').text(`$ ${total.toFixed(2)}`);
}
