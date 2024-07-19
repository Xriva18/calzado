var zapatillas = [
    {
        id: 'Z001', nombre: 'PUMA California Tol Logo', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen: './img/Deportivo/depImg1.jpg'
    },
    {
        id: 'Z003', nombre: 'Nike Air Max 270', descripcion: 'Estas zapatillas ofrecen una comodidad excepcional y un estilo moderno con su unidad Max Air en el talón y su diseño inspirado en los años 90.',
        tallas: '39,40,41', precio: '149.99$', imagen: './img/Deportivo/depImg2.jpg'
    },
    {
        id: 'Z004', nombre: 'Adidas Ultraboost', descripcion: 'Estas zapatillas de running te brindan una increíble amortiguación y retorno de energía para que puedas correr más rápido y por más tiempo.',
        tallas: '39,40,41', precio: '169.99$', imagen: './img/Deportivo/depImg3.jpg'
    }

];
var zapatillas2 = [
    {
        id: 'Z001', nombre: 'XXSS', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen: './img/Deportivo/depImg1.jpg'
    },
    {
        id: 'Z002', nombre: 'PUMA California Tol Logo', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen: './img/Deportivo/depImg1.jpg'
    },
    {
        id: 'Z002', nombre: 'PUMA California Tol Logo', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen: './img/Deportivo/depImg1.jpg'
    },
];
var zapatillas3 = [
    {
        id: 'Z001', nombre: 'XXSS', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen: './img/Deportivo/depImg1.jpg'
    },
    {
        id: 'Z002', nombre: 'PUMA California Tol Logo', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen: './img/Deportivo/depImg1.jpg'
    },
    {
        id: 'Z002', nombre: 'PUMA California Tol Logo', descripcion: 'Vas a estar cómodo dentro y fuera de la cancha con estas zapatillas retro, inspiradas en la cultura pop clásica y en el estilo de baloncesto.',
        tallas: '39,40,41', precio: '109.99$', imagen: './img/Deportivo/depImg1.jpg'
    },
];
$(document).ready(function () {
    recorrerArray();
});

function recorrerArray() {
    $('#cardDeportivo').empty();
    for (var i = 0; i < zapatillas.length; i++) {
        newTr =
            '<div class="row">' +
            ///otra tarjeta
            '<div class="col-md-4 my-2">' +
            '<div class="card shadow border rounded" id="divCard1Crd">' +
            '<img src="' + zapatillas[i].imagen + '" class="card-img-top" alt="..." id="imgCardImg1Crd">' +
            '<div class="card-body border" id="divCardBody1Crd" style="height: 300px; background-color: #e3f2fd;">' +
            '<div id="divCardTitle1Crd" style="height: 8%;">' +
            '<h5 class="card-title" id="h5CardTitle1Crd">' + zapatillas[i].nombre + '</h5>' +
            '</div>' +
            '<div class="card-text mt-4" id="divCardText1Crd" style="height: 60%;">' +
            '<p id="pCardDesc1Crd" class="text-justify" style="height: 100px;">' + zapatillas[i].descripcion + '</p>' +
            '<p class="text-right font-weight-bold">' + 'Tallas: ' + '<label class="font-italic font-weight-light">' + zapatillas[i].tallas +
            '</label>' + '</p >' + '</div >' +
            '<div class="text-right mt-2" id="divCardAction1Crd">' +
            '<label class="mr-2" id="lblPrice1Crd">' + zapatillas[i].precio + '</label>' +
            '<a href="#" class="btn btn-primary" id="aCardLink1Crd">Conoce Más</a>' +
            '</div >' +
            '</div >' +
            '</div >' +
            '</div >' +
            ///otra tarjeta
            '<div class="col-md-4 my-2">' +
            '<div class="card shadow border rounded" id="divCard1Crd">' +
            '<img src="' + zapatillas2[i].imagen + '" class="card-img-top" alt="..." id="imgCardImg1Crd">' +
            '<div class="card-body border" id="divCardBody1Crd" style="height: 300px; background-color: #e3f2fd;">' +
            '<div id="divCardTitle1Crd" style="height: 8%;">' +
            '<h5 class="card-title" id="h5CardTitle1Crd">' + zapatillas2[i].nombre + '</h5>' +
            '</div>' +
            '<div class="card-text mt-4" id="divCardText1Crd" style="height: 60%;">' +
            '<p id="pCardDesc1Crd" class="text-justify" style="height: 100px;">' + zapatillas2[i].descripcion + '</p>' +
            '<p class="text-right font-weight-bold">' + 'Tallas: ' + '<label class="font-italic font-weight-light">' + zapatillas2[i].tallas +
            '</label>' + '</p >' + '</div >' +
            '<div class="text-right mt-2" id="divCardAction1Crd">' +
            '<label class="mr-2" id="lblPrice1Crd">' + zapatillas2[i].precio + '</label>' +
            '<a href="#" class="btn btn-primary" id="aCardLink1Crd">Conoce Más</a>' +
            '</div >' +
            '</div >' +
            '</div >' +
            '</div >' +
            ///otra tarjeta
            '<div class="col-md-4 my-2">' +
            '<div class="card shadow border rounded" id="divCard1Crd">' +
            '<img src="' + zapatillas3[i].imagen + '" class="card-img-top" alt="..." id="imgCardImg1Crd">' +
            '<div class="card-body border" id="divCardBody1Crd" style="height: 300px; background-color: #e3f2fd;">' +
            '<div id="divCardTitle1Crd" style="height: 8%;">' +
            '<h5 class="card-title" id="h5CardTitle1Crd">' + zapatillas3[i].nombre + '</h5>' +
            '</div>' +
            '<div class="card-text mt-4" id="divCardText1Crd" style="height: 60%;">' +
            '<p id="pCardDesc1Crd" class="text-justify" style="height: 100px;">' + zapatillas3[i].descripcion + '</p>' +
            '<p class="text-right font-weight-bold">' + 'Tallas: ' + '<label class="font-italic font-weight-light">' + zapatillas3[i].tallas +
            '</label>' + '</p >' + '</div >' +
            '<div class="text-right mt-2" id="divCardAction1Crd">' +
            '<label class="mr-2" id="lblPrice1Crd">' + zapatillas3[i].precio + '</label>' +
            '<a href="#" class="btn btn-primary" id="aCardLink1Crd">Conoce Más</a>' +
            '</div >' +
            '</div >' +
            '</div >' +
            '</div >' +

            '</div >'
        $('#cardDeportivo').append(newTr);
    }
}

