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