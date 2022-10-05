const express = require('express');
const { Router } = express;
const router = Router();

const personas = [];

router.get('/', (req, res) => {
    res.send({ personas });
})

router.post('/', (req, res) => {
    const persona = req.body;
    personas.push(persona);
    res.status(200).send('Persona agregada');
})

module.exports = router;