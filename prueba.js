fetch('http://localhost:3000/tbl_dep')
    .then(response => response.json())
    .then(data => {
        const tbl_depList = document.getElementById('tbl_dep');
        data.forEach(tbl_dep => {
            const li = document.createElement('li');
            li.textContent = ` Nombre: ${tbl_dep.nombre_dep} - Descripcion: ${tbl_dep.descripcion_dep} - Precio: ${tbl_dep.precio_dep}`;
            tbl_depList.appendChild(li);
        });
    })
    .catch(error => console.log('error', error));