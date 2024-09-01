const express = require('express');
const cors = require('cors');
const connection = require('./database');//puede dar un error de ruta

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//Trae datos de la tabla tbl_dep
app.get('/tbl_dep_ver', (req, res) => {
    connection.query('SELECT * FROM tbl_dep', (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener los datos de la base de datos');
        } else {
            res.json(result);
        }
    });
});
//Trae datos de la tabla tbl_for
app.get('/tbl_for_ver', (req, res) => {
    connection.query('SELECT * FROM tbl_for', (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener los datos de la base de datos');
        } else {
            res.json(result);
        }
    });
});

//Trae datos de la tabla tbl_inc
app.get('/tbl_inc_ver', (req, res) => {
    connection.query('SELECT * FROM tbl_inc', (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener los datos de la base de datos');
        } else {
            res.json(result);
        }
    });
});


// Ruta para enviar datos a la tabla tbl_contactanos
app.post('/tbl_contactanos', (req, res) => {
    const { nombre_con, cedula_con, correo_con, telefono_con, razon_con, otro_con } = req.body;

    // Validación básica de los campos
    if (!nombre_con || !cedula_con || !correo_con || !telefono_con || !razon_con) {
        return res.status(400).send('Por favor, complete todos los campos obligatorios');
    }

    // Consulta para insertar datos en la tabla tbl_contactanos
    const query = `INSERT INTO tbl_contactanos (nombre_con, cedula_con, correo_con, telefono_con, razon_con, otro_con) 
                   VALUES (?, ?, ?, ?, ?, ?)`;

    // Ejecutar la consulta con los valores proporcionados
    connection.query(query, [nombre_con, cedula_con, correo_con, telefono_con, razon_con, otro_con], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).send('Error al insertar los datos en la base de datos');
        }
        res.status(200).send('Datos insertados correctamente');
    });
});
// Ruta para enviar datos a la tabla tbl_clientes
app.post('/tbl_clientes', (req, res) => {
    const { nombre_cli, cedula_cli, correo_cli } = req.body;

    // Validación de los campos obligatorios
    if (!nombre_cli || !cedula_cli || !correo_cli) {
        return res.status(400).send('Por favor, complete todos los campos obligatorios');
    }

    // Consulta SQL para insertar datos
    const query = `INSERT INTO tbl_clientes (nombre_cli, cedula_cli, correo_cli) 
                   VALUES (?, ?, ?)`;

    connection.query(query, [nombre_cli, cedula_cli, correo_cli], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).send('Error al insertar los datos en la base de datos');
        }

        res.status(200).send('Datos insertados correctamente');
    });
})

// Ruta para enviar datos a la tabla tbl_metodo_pag
app.post('/tbl_metodo_pag', (req, res) => {
    const { descripcion_met, comprobante_met, id_cli } = req.body;

    // Validación de los campos obligatorios
    if (!descripcion_met || !id_cli) {
        return res.status(400).send('Por favor, complete todos los campos obligatorios');
    }

    // Consulta SQL para insertar datos
    const query = `INSERT INTO tbl_metodo_pago ( descripcion_met,comprobante_met, id_cli	) 
                   VALUES (?, ?, ?)`;

    connection.query(query, [descripcion_met, comprobante_met, id_cli], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).send('Error al insertar los datos en la base de datos');
        }

        res.status(200).send('Datos insertados correctamente');
    });
})

app.post('/tbl_compras', (req, res) => {
    const { cantidad_comp, id_dep, id_for, id_inc, id_met, precioTotal_com } = req.body;
    // Validación de los campos obligatorios
    if (!cantidad_comp || !id_dep || !id_for || !id_inc || !id_met || !precioTotal_com) {
        return res.status(400).send('Por favor, complete todos los campos obligatorios');
    }

    // Consulta SQL para insertar datos
    const query = `INSERT INTO tbl_compras ( cantidad_comp, id_dep, id_for, id_inc, id_met, precioTotal_com) 
                   VALUES (?, ?, ?, ?, ?,?)`;

    connection.query(query, [cantidad_comp, id_dep, id_for, id_inc, id_met, precioTotal_com], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).send('Error al insertar los datos en la base de datos');
        }

        res.status(200).send('Datos insertados correctamente');
    });
})


app.post('/get-id-cli', (req, res) => {
    const { nombre_cli, cedula_cli, correo_cli } = req.body;

    // Validación de los campos obligatorios
    if (!nombre_cli || !cedula_cli || !correo_cli) {
        return res.status(400).send('Por favor, complete todos los campos obligatorios');
    }

    // Consulta SQL para obtener el id_cli basado en los valores proporcionados
    const query = `SELECT id_cli FROM tbl_clientes WHERE nombre_cli = ? AND cedula_cli = ? AND correo_cli = ?`;

    connection.query(query, [nombre_cli, cedula_cli, correo_cli], (err, result) => {
        if (err) {
            console.error('Error al obtener el id_cli:', err);
            return res.status(500).send('Error al consultar la base de datos');
        }

        if (result.length > 0) {
            // Si se encuentra el cliente, devolver el id_cli
            res.status(200).json({ id_cli: result[0].id_cli });
        } else {
            // Si no se encuentra ningún cliente que coincida, devolver id_cli = -1
            res.status(200).json({ id_cli: -1 });
        }
    });
});

app.post('/get-id-metodo', (req, res) => {
    const { descripcion_met, comprobante_met, id_cli } = req.body;

    // Validación de los campos obligatorios
    if (!descripcion_met || !comprobante_met || !id_cli) {
        return res.status(400).send('Por favor, complete todos los campos obligatorios');
    }

    // Consulta SQL para obtener el id_met basado en los valores proporcionados
    const query = `SELECT id_met FROM tbl_metodo_pago WHERE descripcion_met = ? AND comprobante_met = ? AND id_cli = ?`;

    connection.query(query, [descripcion_met, comprobante_met, id_cli], (err, result) => {
        if (err) {
            console.error('Error al obtener el id_met:', err);
            return res.status(500).send('Error al consultar la base de datos');
        }

        if (result.length > 0) {
            // Si se encuentra el método de pago, devolver el id_met
            res.status(200).json({ id_met: result[0].id_met });
        } else {
            // Si no se encuentra ningún método de pago que coincida, devolver id_met = -1
            res.status(200).json({ id_met: -1 });
        }
    });
});


// Función para ejecutar la consulta con UNION
app.post('/buscar_producto', (req, res) => {
    const { nombre, precio } = req.body;

    // Validación básica de los campos
    if (!nombre || !precio) {
        return res.status(400).send('Por favor, complete todos los campos obligatorios');
    }

    // Consulta SQL con UNION para buscar en varias tablas
    const query = `
        SELECT id, 'A' AS tabla_origen FROM tbl_dep WHERE nombre = ? AND precio = ?
        UNION
        SELECT id, 'B' AS tabla_origen FROM tbl_for WHERE nombre = ? AND precio = ?
        UNION
        SELECT id, 'C' AS tabla_origen FROM tbl_inc WHERE nombre = ? AND precio = ?
    `;

    // Ejecutar la consulta
    connection.query(query, [nombre, precio, nombre, precio, nombre, precio], (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return res.status(500).send('Error al consultar la base de datos');
        }

        // Devolver el resultado de la consulta
        res.status(200).json(result);
    });
});
