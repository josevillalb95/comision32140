const express = require('express');
// CREAMOS INSTANCIA DE LA HERRAMIENTA ROUTER
const router = express.Router();

const mascotas = [];
// LE ASIGNAMOS UN METODO GET 
router.get('/', (req, res) => {
    res.send({ mascotas });
})

// LE ASIGNAMOS UN METODO POST 
router.post('/', (req, res) => {
    const mascota = req.body;
    mascotas.push(mascota);
    res.status(200).send('Mascota agregada');
})
// EXPORTAMOS ROUTER CON "module.exports" PARA QUE LUEGO SE PUDEA IMPORTAR CON "require"
module.exports = router;