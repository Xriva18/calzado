
function imprimirAlerta(j) {
    var productos = productosGlobales; // Usa la variable global para obtener los productos
    $('#cardDeportivoS').show();
    $('#cardDeportivoS').empty();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
                                <p class="h3 py-2">${productos[j].precio}</p>
                                <h6>Descripción:</h6>
                                <p class="text-justify mt-2 mb-4 ">${productos[j].descripcion2}</p>
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="d-inline-block pb-3">
                                            <div class="d-inline-block mr-3 mb-3">Tallas:</div>
                                            <div class="d-inline-block">
                                                <span class="btn btn-primary btn-size text-white m-1" id="talla36">36</span>
                                                <span class="btn btn-primary btn-size text-white m-1" id="talla37">37</span>
                                                <span class="btn btn-primary btn-size text-white m-1" id="talla38">38</span>
                                                <span class="btn btn-primary btn-size text-white m-1" id="talla39">39</span>
                                                <span class="btn btn-primary btn-size text-white m-1" id="talla40">40</span>
                                                <span class="btn btn-primary btn-size text-white m-1" id="talla41">41</span>
                                                <span class="btn btn-primary btn-size text-white m-1" id="talla42">42</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto d-flex justify-content-center align-items-center mt-2 mb-2">
                                    <div>
                                        <ul class="list-inline">
                                            <li class="list-inline-item text-right">
                                                Cantidad:
                                                <input type="hidden" name="product-quanity" id="product-quanity" value="1">
                                            </li>
                                            <li class="list-inline-item"><span class="btn btn-primary" id="btn-minus">-</span></li>
                                            <li class="list-inline-item"><span class="badge bg-white text-dark" id="var-value">1</span></li>
                                            <li class="list-inline-item"><span class="btn btn-primary" id="btn-plus">+</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col d-grid">
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
    $('#cardDeportivoS').append(newTr2);

    $('#talla36').hide();
    $('#talla37').hide();
    $('#talla38').hide();
    $('#talla39').hide();
    $('#talla40').hide();
    $('#talla41').hide();
    $('#talla42').hide();
    if (productos[j].talla1 === '36' || productos[j].talla2 === '36' || productos[j].talla3 === '36') {
        $('#talla36').show();
    }
    if (productos[j].talla1 === '37' || productos[j].talla2 === '37' || productos[j].talla3 === '37') {
        $('#talla37').show();
    }
    if (productos[j].talla1 === '38' || productos[j].talla2 === '38' || productos[j].talla3 === '38') {
        $('#talla38').show();
    }
    if (productos[j].talla1 === '39' || productos[j].talla2 === '39' || productos[j].talla3 === '39') {
        $('#talla39').show();
    }
    if (productos[j].talla1 === '40' || productos[j].talla2 === '40' || productos[j].talla3 === '40') {
        $('#talla40').show();
    }
    if (productos[j].talla1 === '41' || productos[j].talla2 === '41' || productos[j].talla3 === '41') {
        $('#talla41').show();
    }
    if (productos[j].talla1 === '42' || productos[j].talla2 === '42' || productos[j].talla3 === '42') {
        $('#talla42').show();
    }
}