const inputFile = document.querySelector('#input-foto');
const image = document.querySelector('#previa');
const tarjetaDiv = document.querySelector('#tarjetaDiv');
const depositoDiv = document.querySelector('#depositoDiv');
let FotoMostrar;

//duncion de alert al caragr la pagina
/*$(document).ready(function () {
    const productos = JSON.parse(localStorage.getItem("zapatillas"));
    productos.forEach((producto, index) => {
        console.log(producto.nombre + " -- " + producto.precio + " $ " + producto.cantidad);
    });
});*/
$(document).ready(function () {
    $('#FacturacionDiv').hide();
});

function MostrarFacturacion() {
    $('#FacturacionDiv').show();
    $('#full-cart').hide();
}
function MostrarCarrito2() {
    $('#FacturacionDiv').hide();
    $('#full-cart').show();
}

function encodeFileAsBase64URL(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(file);
    });
}

inputFile.addEventListener('input', async (event) => {
    if (inputFile.files.length > 0) {
        FotoMostrar = await encodeFileAsBase64URL(inputFile.files[0]);  // Almacena en FotoMostrar
        image.setAttribute('src', FotoMostrar);
        image.classList.remove('d-none');
    }
});

document.querySelectorAll('input[name="reb_pago"]').forEach(radio => {
    radio.addEventListener('change', function () {
        if (document.getElementById('rbTarjeta').checked) {
            tarjetaDiv.classList.remove('d-none');
            depositoDiv.classList.add('d-none');
        } else if (document.getElementById('rbDeposito').checked) {
            tarjetaDiv.classList.add('d-none');
            depositoDiv.classList.remove('d-none');
        }
    });
});

function validarFormularioFact() {
    $(document).ready(function () {
        const nombre = $('#txtNombreCliente').val();
        const cedula = $('#txtCedula').val();
        const correo = $('#txtCorreo').val();
        const tarjeta = $('#txtNumeroTarjeta').val();
        const nombreTarjeta = $('#txtNombreTarjeta').val();
        const cvc = $('#txtCVC').val();
        const fecha = $('#txtFechaVencimiento').val();
        const comprobante = $('#input-foto')[0].files.length;

        if (nombre === '') {
            swal("Error", "El campo Nombre es obligatorio", "error");
            return false;
        }
        if (cedula === '') {
            swal("Error", "El campo Cedula es obligatorio", "error");
            return false;
        }
        if (correo === '') {
            swal("Error", "El campo Correo es obligatorio", "error");
            return false;
        }
        if (!$('#rbDeposito').is(':checked') && !$('#rbTarjeta').is(':checked')) {
            swal("Error", "Debe seleccionar un método de pago", "error");
            return false;
        }
        if ($('#rbTarjeta').is(':checked')) {

            if (tarjeta === '') {
                swal("Error", "El campo Numero Tarjeta es obligatorio", "error");
                return false;
            }
            if (cvc === '') {
                swal("Error", "El campo CVC es obligatorio", "error");
                return false;
            }
            if (fecha === '') {
                swal("Error", "El campo Fecha Vencimiento es obligatorio", "error");
                return false;
            }
            if (nombreTarjeta === '') {
                swal("Error", "El campo Nombre Tarjeta es obligatorio", "error");
                return false;
            }
        }
        if ($('#rbDeposito').is(':checked')) {
            if (comprobante === 0) {
                swal("Error", "Debe subir el comprobante es obligatorio", "error");
                return false;
            }
            if ($('#txtNumeroComprobante').val() === '') {
                swal("Error", "El campo Numero Comprobante es obligatorio", "error");
                return false;
            }
        }

        //Valdiaciones de llenado
        if (!/^\d{10}$/.test(cedula)) {
            swal('La cédula debe tener 10 dígitos.');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            swal('Ingrese un correo electrónico válido.');
            return false;
        }

        if ($('#rbTarjeta').is(':checked')) {
            if (!tarjeta || !cvc || !fecha) {
                swal('Complete todos los campos de la tarjeta.');
                return false;
            } else {
                if (!/^\d{16}$/.test(tarjeta)) {
                    swal('El número de la tarjeta debe tener 16 dígitos.');
                    return false;
                }
                if (!/^\d{3}$/.test(cvc)) {
                    swal('El CVC debe tener 3 dígitos.');
                    return false;
                }
            }
        }
        GenerarPDF();
        return true;
    });
}

///onclick="if (validarFormularioFact()) { GenerarPDF(); alert('Su pago se realizó con éxito'); }
function GenerarPDF() {
    var doc = new jsPDF();
    var y = 25;
    var x = 20;
    //encabezado
    doc.setFont('HELVETICA');
    doc.setFontStyle('bold');
    doc.setFontSize(18);
    doc.text(87, 15, 'Facturación');
    //datos titulos
    doc.setFontSize(12);
    doc.setFontStyle('times');
    doc.setFontStyle('bold');
    doc.text(x, y, 'Nombre:');
    y += 5;
    doc.text(x, y, 'Cedula: ');
    y += 5;
    doc.text(x, y, 'Correo: ');
    y += 5;
    if ($('#rbTarjeta').is(':checked')) {
        doc.text(x, y, 'Pago por Tarjeta ');
        y += 5;
        doc.text(x, y, 'Nombre de la tarjeta: ');
        y += 5;
        doc.text(x, y, '# Tarjeta: ');
        y += 5;
        doc.text(x, y, 'CVC: ');
        y += 5;
        doc.text(x, y, 'Vencimiento: ');
        y += 5;
    }
    if ($('#rbDeposito').is(':checked')) {
        doc.text(x, y, 'Pago por Transferencia');
        y += 5;
        doc.text(x, y, '#Comprobante: ');
        y += 5;
    }
    doc.text(x, y, 'Total a pagar: ');

    //datos relleno
    x = 50;
    y = 25;
    doc.setFontStyle('normal');
    doc.text(x, y, $('#txtNombreCliente').val());
    y += 5;
    doc.text(x, y, $('#txtCedula').val());
    y += 5;
    doc.text(x, y, $('#txtCorreo').val());
    y += 5;
    if ($('#rbTarjeta').is(':checked')) {
        y += 5;
        doc.text(x + 12, y, $('#txtNombreTarjeta').val());
        y += 5;
        doc.text(x + 12, y, $('#txtNumeroTarjeta').val());
        y += 5;
        doc.text(x + 12, y, $('#txtCVC').val());
        y += 5;
        doc.text(x + 12, y, $('#txtFechaVencimiento').val());
        y += 5;
    }
    if ($('#rbDeposito').is(':checked')) {
        y += 5;
        doc.text(x, y, $('#txtNumeroComprobante').val());
        y += 5;
        doc.addImage(FotoMostrar, 'JPEG', 120, 20, 25, 25);
        y += 5;
    }
    doc.text(x, y, $('#precio-total').text());
    //tabla de productos
    //cabecera
    doc.setFontStyle('bold');
    x = 15;
    y = 80;
    doc.text(x, y, 'Cantidad');
    x += 20;
    doc.text(x, y, '|');
    x += 4;
    doc.text(x, y, 'Nombre');
    x += 113;
    doc.text(x, y, '|');
    x += 4;
    doc.text(x + 3, y, 'Talla');
    x += 20;
    doc.text(x, y, '|');
    x += 4;
    doc.text(x, y, 'Precio');
    //contenido
    doc.setFontStyle('normal');
    const productos = JSON.parse(localStorage.getItem("zapatillas"));
    y = 80;
    productos.forEach((producto, index) => {
        x = 15;
        y += 6;
        doc.text(x + 8, y, producto.cantidad.toString());
        x += 20;
        doc.text(x, y, '|');
        x += 4;
        doc.text(x, y, producto.nombre.toString());
        x += 113;
        doc.text(x, y, '|');
        x += 4;
        doc.text(x + 5, y, producto.talla.toString());
        x += 20;
        doc.text(x, y, '|');
        x += 4;
        doc.text(x, y, " $ " + producto.precio.toString());
    });
    doc.setFontStyle('bold');
    doc.text(x - 25, y + 8, " Total:");
    doc.setFontStyle('normal');
    doc.text(x - 10, y + 8, $('#precio-total').text());


    //elimna zapatillas
    var nombreArchivo = 'Factura_0.pdf';
    doc.save(nombreArchivo);
    // Limpiar localStorage
    localStorage.clear();

    // Recargar la página
    location.reload();

}