const express = require('express');
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));


// esto sirve para poder leer los body en json
app.use(express.json());

// me devuelve la funcionalida de mascotas
const routerMascotas = require('./routes/mascotas.js');
// me devuelve la funcionalida de personas
// LA FUNC. ES LOS METODOS POST Y GET PARA PODER AGREGAR O LEER 
const routerPersonas = require('./routes/personas.js');
// le asigno la func a /mascotas
app.use('/mascotas', routerMascotas);
// como resultado me da lo siguiente 
// POST DE MASCOTAS -> PARA CREAR 
// GET DE MASCOTAS -> PARA LEER 
app.use('/personas', routerPersonas);
// como resultado me da lo siguiente 
// POST DE PERSONAS -> PARA CREAR 
// GET DE PERSONAS -> PARA LEER 