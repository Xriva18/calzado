var zapatillas = [
    {
        id: 'Z001', nombre: 'PUMA California Tol Logo', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen1: './img/Deportivo/depImg1.jpg', imagen2: './img/Vista1.jpg', imagen3: './img/Vista2.jpg'
    },
    {
        id: 'Z002', nombre: 'Nike Air Max 270', descripcion: 'Estas zapatillas ofrecen una comodidad excepcional y un estilo moderno con su unidad Max Air en el talón y su diseño inspirado en los años 90.',
        tallas: '39,40,41', precio: '149.99$', imagen1: './img/Deportivo/depImg2.jpg', imagen2: './img/Vista1.jpg', imagen3: './img/Vista2.jpg'
    },
    {
        id: 'Z003', nombre: 'Adidas Ultraboost', descripcion: 'Estas zapatillas de running te brindan una increíble amortiguación y retorno de energía para que puedas correr más rápido y por más tiempo.',
        tallas: '39,40,41', precio: '169.99$', imagen1: './img/Deportivo/depImg3.jpg', imagen2: './img/Vista1.jpg', imagen3: './img/Vista2.jpg'
    },
];
$(document).ready(function () {
    recorrerArray();
});

/*function recorrerArray() {
    $('#cardDeportivo').empty();
    for (var i = 0; i < zapatillas.length; i++) {
        newTr =
            ///otra tarjeta
            '<div class="col-md-4 my-2">' +
            '<div class="card shadow border rounded">' +
            '<img src="' + zapatillas[i].imagen1 + '" class="card-img-top" alt="..." >' +
            '<div class="card-body border" style="height: 300px; background-color: #e3f2fd;">' +
            '<div style="height: 8%;">' +
            '<h5 class="card-title">' + zapatillas[i].nombre + '</h5>' +
            '</div>' +
            '<div class="card-text mt-4"  style="height: 60%;">' +
            '<p  class="text-justify" style="height: 100px;">' + zapatillas[i].descripcion + '</p>' +
            '<p class="text-right font-weight-bold">' +
            '</label>' + '</p >' + '</div >' +
            '<div class="text-right mt-2">' +
            '<label class="mr-2">' + zapatillas[i].precio + '</label>' +
            '<a href="#" class="btn btn-primary">Conoce Más</a>' +
            '</div >' +
            '</div >' +
            '</div >' +
            '</div >'
        //xd
        $('#cardDeportivo').append(newTr);
    }
}*/
function recorrerArray() {
    $('#cardDeportivo').empty();
    for (var i = 0; i < zapatillas.length; i++) {
        var ConoceMas = '<a href="#" class="btn btn-primary" onclick="imprimirAlerta(\'' + zapatillas[i].id + '\');">Conoce Más</a>';
        var newTr =
            '<div class="col-md-4 my-2">' +
            '<div class="card shadow border rounded">' +
            '<img src="' + zapatillas[i].imagen1 + '" class="card-img-top" alt="...">' +
            '<div class="card-body border" style="height: 300px; background-color: #e3f2fd;">' +
            '<div style="height: 8%;">' +
            '<h5 class="card-title">' + zapatillas[i].nombre + '</h5>' +
            '</div>' +
            '<div class="card-text mt-4" style="height: 60%;">' +
            '<p class="text-justify" style="height: 100px;">' + zapatillas[i].descripcion + '</p>' +
            '<p class="text-right font-weight-bold">' +
            '</label>' + '</p>' + '</div>' +
            '<div class="text-right mt-2">' +
            '<label class="mr-2">' + zapatillas[i].precio + '</label>' +
            ConoceMas +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        $('#cardDeportivo').append(newTr);
    }
}

function imprimirAlerta(id) {
    //$('#cardDeportivo').hide();
    alert(id);
}