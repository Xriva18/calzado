var zapatillas = [
    {
        id: 'Z001', nombre: 'PUMA California Tol Logo',
        descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        descripcion2: 'Uno de los zapatos de entrenamiento casuales más llamativos de la línea PUMA Tennis, el PUMA California es un O.G. Estilo nacido en las canchas en 1983 del campeón argentino de Grand Slam Guillermo Vilas. Pronto llegó a las calles de California, donde adoptó su nuevo nombre y quedó consagrado para siempre en la historia de las zapatillas. Con la misma silueta clásica de California, esta versión presenta una parte superior perforada con un diseño de bloques de color único y el logotipo de PUMA.',
        talla1: '36', talla2: '37', talla3: '38', precio: '109.99$', imagen1: './img/Deportivo/depImg1.jpg', imagen2: './img/Vista1.jpg', imagen3: './img/Vista2.jpg'
    },
    {
        id: 'Z002', nombre: 'Nike Air Max 270',
        descripcion: 'Estas zapatillas ofrecen una comodidad excepcional y un estilo moderno con su unidad Max Air en el talón y su diseño inspirado en los años 90.',
        descripcion2: 'Los Nike Air Max 270, los primeros Air Max para el día a día de Nike, te aportan estilo, comodidad y gran actitud. El diseño se inspira en los íconos clásicos de Air Max y muestra la innovación más grande de Nike con su gran ventana y su nueva variedad de colores.',
        talla1: '39', talla2: '40', talla3: '42', precio: '149.99$', imagen1: './img/Deportivo/depImg2.jpg', imagen2: './img/Vista1.jpg', imagen3: './img/Vista2.jpg'
    },
    {
        id: 'Z003', nombre: 'Adidas Ultraboost',
        descripcion: 'Estas zapatillas de running te brindan una increíble amortiguación y retorno de energía para que puedas correr más rápido y por más tiempo.',
        descripcion2: 'Disfruta de una comodidad y respuesta increíbles con estos tenis de running Ultraboost. Presentan una mediasuela BOOST que te proporciona un retorno de energía sin límites, un sistema Linear Energy Push y una suela con compuesto de caucho Continental™. Estos tenis presentan una parte superior fabricada con un hilo reciclado de alto rendimiento creado con al menos un 50% de Parley Ocean Plastic —  un material reinventado a partir de residuos plásticos recogidos en zonas costeras para evitar que contaminen nuestros océanos.',
        talla1: '38', talla2: '37', talla3: '40', precio: '169.99$', imagen1: './img/Deportivo/depImg3.jpg', imagen2: './img/Vista1.jpg', imagen3: './img/Vista2.jpg'
    },
];
$(document).ready(function () {
    card();
});

function card() {
    $('#cardDeportivo').empty();
    $('#cardDeportivoS').hide();
    for (var i = 0; i < zapatillas.length; i++) {
        var ConoceMas = '<a class="btn btn-primary" onclick="imprimirAlerta(\'' + i + '\');">Conoce Más</a>';
        var newTr = `
            <div class="col-md-4 my-2">
            <div class="card shadow border rounded">
                <img src="${zapatillas[i].imagen1}" class="card-img-top" alt="...">
                <div class="card-body border" style="height: 300px; background-color: #e3f2fd;">
                <div style="height: 8%;">
                    <h5 class="card-title">${zapatillas[i].nombre}</h5>
                </div>
                <div class="card-text mt-4" style="height: 60%;">
                    <p class="text-justify" style="height: 100px;">${zapatillas[i].descripcion}</p>
                    <div
                                    class="row  text-right d-flex justify-content-end mr-2 mt-2">
                                    <p
                                        class="font-weight-bold mr-3">Tallas:</p><label>
                                        ${zapatillas[i].talla1},
                                        ${zapatillas[i].talla2},
                                        ${zapatillas[i].talla3}</label>
                                </div>
                    <p class="text-right font-weight-bold">
                    </label>
                    </p>
                </div>
                <div class="text-right">
                    <label class="mr-2">${zapatillas[i].precio}</label>
                    ${ConoceMas}
                </div>
                </div>
            </div>
            </div>`;
        $('#cardDeportivo').append(newTr);
    }
}

function imprimirAlerta(j) {
    $('#cardDeportivoS').show();
    $('#cardDeportivoS').empty();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    var newTr2 = `
        <script src="assets/js/templatemo.js"></script>
    <div class="container" style="margin-bottom:80px;">
            <div class="row m-3"> <!---id-->
                <div class="col-lg-5 mt-2">
                    <div class="card mb-3 shadow border rounded">
                        <img class="card-img img-fluid"
                            src="${zapatillas[j].imagen1}" alt="Card image cap"
                            id="product-detail">
                    </div>
                    <div class="row">
                        <div class="col-1 align-self-center">
                            <a href="#multi-item-example" role="button"
                                data-bs-slide="prev">
                                <i class="text-dark fas fa-chevron-left"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                        </div>
                        <div id="multi-item-example"
                            class="col-10 carousel slide carousel-multi-item"
                            data-bs-ride="carousel">
                            <div class="carousel-inner product-links-wap"
                                role="listbox">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col">
                                            <a href="#">
                                                <img
                                                    class="card-img img-fluid shadow border rounded"
                                                    style="height: 120px;"
                                                    src="${zapatillas[j].imagen1}"
                                                    alt="Product Image 1">
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="#">
                                                <img
                                                    class="card-img img-fluid shadow border rounded"
                                                    style="height: 120px;"
                                                    src="${zapatillas[j].imagen2}"
                                                    alt="Product Image 2">
                                            </a>
                                        </div>
                                        <div class="col">
                                            <a href="#">
                                                <img
                                                    class="card-img img-fluid shadow border rounded"
                                                    style="height: 120px;"
                                                    src="${zapatillas[j].imagen3}"
                                                    alt="Product Image 3">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-1 align-self-center">
                            <a href="#multi-item-example" role="button"
                                data-bs-slide="next">
                                <i class="text-dark fas fa-chevron-right"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 mt-2">
                    <div class="card">
                        <div class="card-body shadow rounded p-4">
                            <h1 class="h2">${zapatillas[j].nombre}</h1>
                            <p class="h3 py-2">${zapatillas[j].precio}</p>
                            <h6>Descripción:</h6>
                            <p class="text-justify mt-2 mb-4 ">${zapatillas[j].descripcion2}</p>

                            <div class="row">
                                <div class="col-auto">
                                    <div class="d-inline-block pb-3">
                                        <div
                                            class="d-inline-block mr-3 mb-3">Tallas:
                                            <input type="hidden"
                                                name="product-size"
                                                id="product-size"
                                                value="S">
                                        </div>
                                        <div class="d-inline-block">
                                            <span
                                                class="btn btn-primary btn-size text-white m-1" id="talla36">36</span>
                                            <span
                                                class="btn btn-primary btn-size text-white m-1" id="talla37">37</span>
                                            <span
                                                class="btn btn-primary btn-size text-white m-1" id="talla38">38</span>
                                            <span
                                                class="btn btn-primary btn-size text-white m-1" id="talla39">39</span>
                                            <span
                                                class="btn btn-primary btn-size text-white m-1" id="talla40">40</span>
                                            <span
                                                class="btn btn-primary btn-size text-white m-1" id="talla41">41</span>
                                            <span
                                                class="btn btn-primary btn-size text-white m-1" id="talla42">42</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-auto d-flex justify-content-center align-items-center mt-2 mb-2">
                                <div>
                                    <ul class="list-inline">
                                        <li
                                            class="list-inline-item text-right">
                                            Cantidad:
                                            <input type="hidden"
                                                name="product-quanity"
                                                id="product-quanity"
                                                value="1">
                                        </li>
                                        <li class="list-inline-item"><span
                                                class="btn btn-primary"
                                                id="btn-minus">-</span></li>
                                        <li class="list-inline-item"><span
                                                class="badge bg-white text-dark"
                                                id="var-value">1</span></li>
                                        <li class="list-inline-item"><span
                                                class="btn btn-primary"
                                                id="btn-plus">+</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col d-grid">
                                    <button type="submit"
                                        class="btn btn-primary btn-lg"
                                        name="submit"
                                        value="addtocard">Añade al
                                        carrito<i
                                            class="bi bi-cart3 ml-2"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="assets/js/templatemo.js"></script>
    `;
    $('#cardDeportivoS').append(newTr2);

    $('#talla36').hide();
    $('#talla37').hide();
    $('#talla38').hide();
    $('#talla39').hide();
    $('#talla40').hide();
    $('#talla41').hide();
    $('#talla42').hide();
    if (zapatillas[j].talla1 === '36' || zapatillas[j].talla2 === '36' || zapatillas[j].talla3 === '36') {
        $('#talla36').show();
    }
    if (zapatillas[j].talla1 === '37' || zapatillas[j].talla2 === '37' || zapatillas[j].talla3 === '37') {
        $('#talla37').show();
    }
    if (zapatillas[j].talla1 === '38' || zapatillas[j].talla2 === '38' || zapatillas[j].talla3 === '38') {
        $('#talla38').show();
    }
    if (zapatillas[j].talla1 === '39' || zapatillas[j].talla2 === '39' || zapatillas[j].talla3 === '39') {
        $('#talla39').show();
    }
    if (zapatillas[j].talla1 === '40' || zapatillas[j].talla2 === '40' || zapatillas[j].talla3 === '40') {
        $('#talla40').show();
    }
    if (zapatillas[j].talla1 === '41' || zapatillas[j].talla2 === '41' || zapatillas[j].talla3 === '41') {
        $('#talla41').show();
    }
    if (zapatillas[j].talla1 === '42' || zapatillas[j].talla2 === '42' || zapatillas[j].talla3 === '42') {
        $('#talla42').show();
    }
}

