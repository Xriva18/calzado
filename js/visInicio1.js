
function imprimirAlerta(j) {
    var productos = productosGlobales; // Usa la variable global para obtener los productos
    $('#cardInicio1S').show();
    $('#cardInicio1S').empty();

    var newTr2 = `
     <script src="./assets/js/templatemo.js"></script>
            <div class="container" style="margin-bottom:80px;">
                <div class="row m-3">
                    <div class="col-lg-5 mt-2">
                        <div class="card mb-3 shadow border rounded">
                            <img class="card-img img-fluid" src="${productos[j].imagen1}" alt="Card image cap" id="product-detail">
                        </div>
                        <div class="row">
                            <div class="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                    <i class="text-dark fas fa-chevron-left"></i>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </div>
                            <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                <div class="carousel-inner product-links-wap" role="listbox">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col">
                                                <a href="#">
                                                    <img class="card-img img-fluid shadow border rounded" style="height: 120px;" src="${productos[j].imagen1}" alt="Product Image 1">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a href="#">
                                                    <img class="card-img img-fluid shadow border rounded" style="height: 120px;" src="${productos[j].imagen2}" alt="Product Image 2">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a href="#">
                                                    <img class="card-img img-fluid shadow border rounded" style="height: 120px;" src="${productos[j].imagen3}" alt="Product Image 3">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-1 align-self-center">
                                <a href="#multi-item-example" role="button" data-bs-slide="next">
                                    <i class="text-dark fas fa-chevron-right"></i>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 mt-2">
                        <div class="card">
                            <div class="card-body shadow rounded p-4">
                                <h1 class="h2">${productos[j].nombre}</h1>
                                <p class="h3 py-2">$ ${productos[j].precio}</p>
                                <h6>Descripción:</h6>
                                <p class="text-justify mt-2 mb-4 ">${productos[j].descripcion2}</p>
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="d-inline-block pb-3">
                                            <div class="d-inline-block mr-3 mb-3">Tallas:</div>
                                            <div class="d-inline-block">
                                                <span class="btn btn-primary btn-size text-white m-1" data-value="${productos[j].talla1}">${productos[j].talla1}</span>
                                                <span class="btn btn-primary btn-size text-white m-1" data-value="${productos[j].talla2}">${productos[j].talla2}</span>
                                                <span class="btn btn-primary btn-size text-white m-1" data-value="${productos[j].talla3}">${productos[j].talla3}</span>
                                            </div>
                                            <input type="hidden" id="product-size" value="${productos[j].talla1}">
                                            <input type="hidden" id="product-size" value="${productos[j].talla2}">
                                            <input type="hidden" id="product-size" value="${productos[j].talla3}">
                                        </div>
                                    </div>
                                </div>
                                <!-- Div acontador -->                                
                                <div class="row">
                                    <div class="col d-grid mt-3">
                                        <button type="submit" class="btn btn-primary btn-lg" name="submit" value="addtocard">
                                            Añade al carrito<i class="bi bi-cart3 ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    $('#cardInicio1S').append(newTr2);
    $('#cardInicio1S button').eq(0).on('click', () => agregarAlCarrito(productos[j]));
}