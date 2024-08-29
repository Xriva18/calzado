const express = require('express');
const cors = require('cors');
const connection = require('./database');//puede dar un error de ruta

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/tbl_dep', (req, res) => {
    connection.query('SELECT * FROM tbl_dep', (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener los datos de la base de datos');
        } else {
            res.json(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});