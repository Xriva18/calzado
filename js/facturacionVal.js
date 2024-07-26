const inputFile = document.querySelector('#input-foto');
const image = document.querySelector('#previa');
const tarjetaDiv = document.querySelector('#tarjetaDiv');
const depositoDiv = document.querySelector('#depositoDiv');

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
        const base64URL = await encodeFileAsBase64URL(inputFile.files[0]);
        image.setAttribute('src', base64URL);
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
function GenerarPDF() {

}