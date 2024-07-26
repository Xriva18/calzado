const inputFile = document.querySelector('#input-foto');
const image = document.querySelector('#previa');
const tarjetaDiv = document.querySelector('#tarjetaDiv');
const depositoDiv = document.querySelector('#depositoDiv');
let FotoMostrar;

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

/*function validarFormularioFact() {
    $(document).ready(function () {
        const nombre = $('#txtNombreCliente').val();
        const cedula = $('#txtCedula').val();
        const correo = $('#txtCorreo').val();
        const tarjeta = $('#txtNumeroTarjeta').val();
        const cvc = $('#txtCVC').val();
        const fecha = $('#txtFechaVencimiento').val();
        const comprobante = $('#input-foto')[0].files.length;

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

        if ($('#rbDeposito').is(':checked')) {
            if (comprobante === 0) {
                swal('Por favor, suba un comprobante de depósito.');
                return false;
            }
        }

        return true;
    });
}*/

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


    ///impresion de la factura
    var nombreArchivo = 'Factura_0.pdf';
    doc.save(nombreArchivo);
}