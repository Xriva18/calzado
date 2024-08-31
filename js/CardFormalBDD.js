

$(document).ready(function () {
    $('#cardFormal').empty();
    $('#cardFormalS').hide();
    fetch('http://localhost:3000/tbl_for_ver')
        .then(response => response.json())
        .then(data => {
            data.forEach(tbl_for_ver => {
                i = tbl_for_ver.id;
                var ConoceMas = '<a class="btn btn-primary" onclick="imprimirAlerta(' + i + ');">Conoce Más</a>';
                var newTr = `
                 <div class="col-md-4 my-2">
                    <div class="card shadow border rounded">
                        <img src="${tbl_for_ver.imagen1}" class="card-img-top" alt="...">
                        <div class="card-body border" style="height: 300px; background-color: #e3f2fd;">
                            <div style="height: 10%;">
                                <h5 class="card-title">${tbl_for_ver.nombre} </h5>
                            </div>
                            <div class="card-text mt-4" style="height: 60%;">
                                <p class="text-justify" style="height: 85%;">${tbl_for_ver.descripcion}</p>
                                <div class="row text-right d-flex justify-content-end mr-2 mb-3">
                                    <p class="font-weight-bold mr-3">Tallas:</p>
                                    <label>
                                        ${tbl_for_ver.talla1}, ${tbl_for_ver.talla2}, ${tbl_for_ver.talla3}
                                    </label>
                                </div>
                                <p class="text-right font-weight-bold"></p>
                                <div class="text-right">
                                    <label class="mr-2">${tbl_for_ver.precio} $</label>
                                    ${ConoceMas}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="./js/visFormal"></script>`;

                $('#cardFormal').append(newTr);
                $.getScript('./js/visFormal');
            });
        })
        .catch(error => console.log('error', error));

});
///////ver el rpoducto

function imprimirAlerta(j) {
    // Muestra la tarjeta y vacía su contenido
    $('#cardFormalS').show();
    $('#cardFormalS').empty(); // Borra cualquier contenido previo

    // Desplázate al inicio de la página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Realiza la petición para obtener los datos
    fetch('http://localhost:3000/tbl_for_ver')
        .then(response => response.json())
        .then(data => {
            // Encuentra el producto deseado en la base de datos
            var tbl_for_ver = data.find(producto => producto.id === j);

            // Borra cualquier contenido previo en la tarjeta
            $('#cardFormalS').empty();

            // Crea el contenido dinámico con los datos del producto
            var newTr2 = `<div class="container" style="margin-bottom:80px;">
                <div class="row m-3">
                    <div class="col-lg-5 mt-2">
                        <div class="card mb-3 shadow border rounded">
                            <img class="card-img img-fluid" src="${tbl_for_ver.imagen1}" alt="Card image cap" id="product-detail">
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
                                                    <img class="card-img img-fluid shadow border rounded" style="height: 120px;" src="${tbl_for_ver.imagen1}" alt="Product Image 1">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a href="#">
                                                    <img class="card-img img-fluid shadow border rounded" style="height: 120px;" src="${tbl_for_ver.imagen2}" alt="Product Image 2">
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a href="#">
                                                    <img class="card-img img-fluid shadow border rounded" style="height: 120px;" src="${tbl_for_ver.imagen3}" alt="Product Image 3">
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
                                <h1 class="h2">${tbl_for_ver.nombre}</h1>
                                <p class="h3 py-2">$ ${tbl_for_ver.precio}</p>
                                <h6>Descripción:</h6>
                                <p class="text-justify mt-2 mb-4 ">${tbl_for_ver.descripcion2}</p>
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="d-inline-block pb-3">
                                            <div class="d-inline-block mr-3 mb-3">Tallas:</div>
                                            <div class="d-inline-block">
                                                <span class="btn btn-primary btn-size text-white m-1" data-value="${tbl_for_ver.talla1}">${tbl_for_ver.talla1}</span>
                                                <span class="btn btn-primary btn-size text-white m-1" data-value="${tbl_for_ver.talla2}">${tbl_for_ver.talla2}</span>
                                                <span class="btn btn-primary btn-size text-white m-1" data-value="${tbl_for_ver.talla3}">${tbl_for_ver.talla3}</span>
                                            </div>
                                            <input type="hidden" id="product-size" value="${tbl_for_ver.talla1}">
                                            <input type="hidden" id="product-size" value="${tbl_for_ver.talla2}">
                                            <input type="hidden" id="product-size" value="${tbl_for_ver.talla3}">
                                        </div>
                                    </div>
                                </div>
                                <!-- Div acontador -->                                
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

            <script>
                            
                'use strict';
                $(document).ready(function () {

                // Accordion
                var all_panels = $('.templatemo-accordion > li > ul').hide();

                $('.templatemo-accordion > li > a').click(function () {
                    console.log('Hello world!');
                    var target = $(this).next();
                    if (!target.hasClass('active')) {
                    all_panels.removeClass('active').slideUp();
                    target.addClass('active').slideDown();
                    }
                    return false;
                });
                // End accordion

                // Product detail
                $('.product-links-wap a').click(function () {
                    var this_src = $(this).children('img').attr('src');
                    $('#product-detail').attr('src', this_src);
                    return false;
                });
                $('#btn-minus').click(function () {
                    var val = $("#var-value").html();
                    val = (val == '1') ? val : val - 1;
                    $("#var-value").html(val);
                    $("#product-quanity").val(val);
                    return false;
                });
                $('#btn-plus').click(function () {
                    var val = $("#var-value").html();
                    val++;
                    $("#var-value").html(val);
                    $("#product-quanity").val(val);
                    return false;
                });

                ///se selecionan tallas
                $('.btn-size').click(function () {
                    var this_val = $(this).data('value'); // Obtener el valor de la talla del atributo data-value
                    $("#product-size").val(this_val); // Actualizar el campo oculto con la talla seleccionada
                    $(".btn-size").removeClass('btn-secondary').addClass('btn-primary'); // Reiniciar el estado de los botones
                    $(this).removeClass('btn-primary').addClass('btn-secondary'); // Aplicar el estado activo al botón seleccionado
                    return false;
                });
                // End roduct detail

                });
            </script>`;

            // Agrega el nuevo contenido a la tarjeta
            $('#cardFormalS').append(newTr2);

            // Asegúrate de agregar el evento de click al botón
            $('#cardFormalS button').eq(0).off('click'); // Elimina cualquier evento anterior
            $('#cardFormalS button').eq(0).on('click', () => agregarAlCarrito(tbl_for_ver));
        })
        .catch(error => console.log('Error:', error));
}



