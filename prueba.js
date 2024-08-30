fetch('http://localhost:3000/tbl_inc')
    .then(response => response.json())
    .then(data => {
        const tbl_depList = document.getElementById('tbl_dep');
        data.forEach(tbl_inc => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${tbl_inc.nombre} - Descripcion: ${tbl_inc.descripcion} - Precio: ${tbl_inc.precio}`;
            tbl_depList.appendChild(li);
        });
    })
    .catch(error => console.log('error', error));

function enviarContacto() {
    alert('Enviando datos...');
    fetch('http://localhost:3000/tbl_contactanos', {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(contactData) // Convierte los datos a JSON para enviarlos
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos');
                alert('Error al enviar los datos');
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert('Datos enviados correctamente');
        })
        .catch(error => {
            console.error('Hubo un error al enviar los datos:', error);
            alert('Hubo un error al enviar los datos');
        });
}

const contactData = {
    nombre_con: 'Juan Pérez',
    cedula_con: '0123456789',
    correo_con: 'juan.perez@example.com',
    telefono_con: '0998765432',
    razon_con: 'Consulta',
    otro_con: 'Tengo una consulta sobre sus servicios.'
};


const clienteData = {
    nombre_cli: 'Prueba3',
    cedula_cli: '0123456789',
    correo_cli: 'juan.perez@example.com'
};

function enviarCliente() {
    alert('Enviando datos...');
    fetch('http://localhost:3000/tbl_clientes', {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(clienteData) // Convierte los datos a JSON para enviarlos
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert('Datos enviados correctamente');
        })
        .catch(error => {
            console.error('Hubo un error al enviar los datos:', error);
            alert('Hubo un error XD');
        });
}

function funcion_llama_cliente() {
    alert("entro");
    enviarCliente();
    alert("salio");
}


/*const metodoData = {
    descr_met: 'Prueba3',
    comprobante_met: '0123456789',
    id_cli: '5' //poner el mismo que el de la compra
};*/
function enviarCliente(clienteData) {
    alert('Enviando datos del cliente...');
    fetch('http://localhost:3000/tbl_clientes', {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(clienteData) // Convierte los datos a JSON para enviarlos
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);

            swal("Producto comprado", "Compra realizada", "success");

            const resultadoPDF = GenerarPDF();
            /*if (resultadoPDF == 1) {
                setTimeout(() => {
                    localStorage.clear();
                    location.reload();
                }, 3000); // Aquí puedes ajustar el tiempo en milisegundos
            }*/
        })
        .catch(error => {
            console.error('Hubo un error al enviar los datos:', error);
            alert('Hubo un error XD');
        });
}



function enviarMetodo(clienteData) {
    alert('Obteniendo ID del cliente...');
    // Primero obtenemos el id_cli
    fetch('http://localhost:3000/get-id-cli', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(clienteData) // Enviamos los datos del cliente
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener el ID del cliente');
            }
            return response.json(); // Parseamos la respuesta a JSON
        })
        .then(data => {
            // Aquí tenemos el id_cli que necesitamos
            const id_cli = data.id_cli;
            alert('ID del cliente obtenido: ' + id_cli);

            // Ahora procedemos a enviar los datos del método de pago usando el id_cli
            const metodoData = {
                descripcion_met: 'Envio metodo',
                comprobante_met: 'Con cliente',
                id_cli: id_cli // Usamos el id_cli obtenido
            };

            alert('Enviando datos del método de pago...');
            alert(JSON.stringify(metodoData));

            // Enviamos los datos del método de pago
            return fetch('http://localhost:3000/tbl_metodo_pag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(metodoData)
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos del método de pago');
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert('Datos enviados correctamente');
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            alert('Hubo un error al procesar la solicitud');
        });
}

function funcion_llama_cliente() {
    alert("entro");
    enviarCliente();
    alert("salio");
}