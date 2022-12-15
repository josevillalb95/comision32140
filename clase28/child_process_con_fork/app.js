const express = require('express');
const app = express();
const { fork } = require('child_process');
const { sum } = require('./factory/suma');

let visitas = 0;
app.get('/', (req, res) => {
    res.send(`<p>Total de visitas: <strong>${visitas++}</strong></p>`);
});

app.get('/calculo-bloq', (req, res) => {
    const resultado = sum();
    res.send(`El resultado de la suma es: ${resultado}`);
});

app.get('/calculo-nobloq', (req, res) => {
    const child = fork(  './factory/child.js');
    child.on('message', msg => {
        if (msg == 'ready') {
            child.send({ PID: child.pid });
        } else res.send(msg);
    });

});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));