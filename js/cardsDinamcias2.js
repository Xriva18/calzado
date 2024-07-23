
//propio de zapatillas
$(document).ready(function () {
    card(zapatillas);
});

var productosGlobales = []; // Variable global para almacenar los productos

function card(productos) {
    productosGlobales = productos; // Almacena los productos en la variable global
    $('#cardDeportivo').empty();
    $('#cardDeportivoS').hide();
    for (var i = 0; i < productos.length; i++) {
        var ConoceMas = '<a class="btn btn-primary" onclick="imprimirAlerta(' + i + ');">Conoce Más</a>';
        var newTr = `
                <div class="col-md-4 my-2">
                    <div class="card shadow border rounded">
                        <img src="${productos[i].imagen1}" class="card-img-top" alt="...">
                        <div class="card-body border" style="height: 300px; background-color: #e3f2fd;">
                            <div style="height: 8%;">
                                <h5 class="card-title">${productos[i].nombre}</h5>
                            </div>
                            <div class="card-text mt-4" style="height: 60%;">
                                <p class="text-justify" style="height: 100px;">${productos[i].descripcion}</p>
                                <div class="row text-right d-flex justify-content-end mr-2 mt-2">
                                    <p class="font-weight-bold mr-3">Tallas:</p>
                                    <label>
                                        ${productos[i].talla1}, ${productos[i].talla2}, ${productos[i].talla3}
                                    </label>
                                </div>
                                <p class="text-right font-weight-bold"></p>
                            </div>
                            <div class="text-right">
                                <label class="mr-2">${productos[i].precio}</label>
                                ${ConoceMas}
                            </div>
                        </div>
                    </div>
                </div>
                <script src="./js/visualizarProducto.js"></script>`;
        $('#cardDeportivo').append(newTr);
    }
}


