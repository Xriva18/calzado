
const clienteData = {
    nombre: "PUMA California Tol",
    precio: 109.99
};

function buscarProducto() {
    return fetch('http://localhost:3000/buscar_producto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clienteData)
    })
        .then(response => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error('Error en la solicitud: ' + text);
                });
            }
            // Obtener los datos de la respuesta
            return response.json();
        })
        .then(data => {
            // Si se encuentran datos, mostrar un alert con la información
            if (data && data.length > 0) {
                let item = data[0]; // Cambia el índice a 1 si quieres el segundo elemento
                alert('Datos encontrados: ' + JSON.stringify(item.tabla_origen));
                alert('Datos encontrados: ' + JSON.stringify(item.id));
            } else {
                // Si no se encuentran datos, mostrar -1
                alert('-1');
            }
        })
        .catch(error => {
            alert('Error al buscar el producto: ' + error.message);
            throw error; // Lanzar el error para que pueda ser manejado por el llamador
        });
}



