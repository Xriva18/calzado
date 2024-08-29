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
    nombre_cli: 'Juan Pérez',
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