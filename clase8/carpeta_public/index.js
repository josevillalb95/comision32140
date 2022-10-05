const express = require('express');
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening `));
server.on("error", err => console.log(`Error: ${err}`));
const routerMascotas = require('./routes/mascotas.js');
const routerPersonas = require('./routes/personas.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

app.use('/formularios', express.static(__dirname+'/public/index.html'));
console.log( '1) link formulario: http://localhost:8080/formularios')


app.use(express.static(__dirname+'/public'));
console.log( '2) link formulario: http://localhost:8080/index.html')

