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
                              <tr>
                                <th scope="row">${index + 1}</th>
                                <td><img src="${producto.imagen1}" alt="Image" style="height: 50px;"></td>
                                <td>${producto.nombre}</td>
                                <td class="text-center">${producto.talla}</td>
                                <td class="text-center">
                                    <div>
                                        <button class="btn button bg-primary text-white">+</button>
                                        <span class="ml-3 mr-3">${producto.cantidad}</span>
                                        <button class="btn button bg-primary text-white">-</button>
                                    </div>
                                </td>
                                <td class="text-center">$ ${producto.precio}</td>
                            </tr>
            `;
            $('#productos-table-body').append(newTr2);
        });
    } else {
        alert("No hay productos en el carrito.");
    }
}

function agregarAlCarrito(index) {
    console.log("Producto agregado al carrito:", index);
    // Aquí puedes añadir la lógica para agregar el producto al carrito
}
