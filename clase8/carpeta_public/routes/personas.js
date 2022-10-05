const router = require('express').Router();

const personas = [];

router.get('/', (req, res) => {
    res.send({ personas });
})

router.post('/', (req, res) => {
    const { nombre, apellido, edad } = req.body;
    personas.push({ nombre, apellido, edad });
    res.json({ok:true});
})

module.exports = router;