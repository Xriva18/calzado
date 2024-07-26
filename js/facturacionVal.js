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

function validarFormulario() {
    const nombre = document.getElementById('txtNombreCliente').value;
    const cedula = document.getElementById('txtCedula').value;
    const correo = document.getElementById('txtCorreo').value;
    const tarjeta = document.getElementById('txtNumeroTarjeta').value;
    const cvc = document.getElementById('txtCVC').value;
    const fecha = document.getElementById('txtFechaVencimiento').value;
    const comprobante = document.getElementById('input-foto').files.length;

    if (!nombre || !cedula || !correo) {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }

    if (!/^\d{10}$/.test(cedula)) {
        alert('La cédula debe tener 10 dígitos.');
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alert('Ingrese un correo electrónico válido.');
        return false;
    }

    if (document.getElementById('rbTarjeta').checked) {
        if (!tarjeta || !cvc || !fecha) {
            alert('Complete todos los campos de la tarjeta.');
            return false;
        }
        if (!/^\d{16}$/.test(tarjeta)) {
            alert('El número de la tarjeta debe tener 16 dígitos.');
            return false;
        }
        if (!/^\d{3}$/.test(cvc)) {
            alert('El CVC debe tener 3 dígitos.');
            return false;
        }
    }

    if (document.getElementById('rbDeposito').checked) {
        if (comprobante === 0) {
            alert('Por favor, suba un comprobante de depósito.');
            return false;
        }
    }

    return true;
}