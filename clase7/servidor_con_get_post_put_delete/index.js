const express = require('express');

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = 'Frase inicial';

app.get('/api/frase', (req, res) => res.json({ frase }));

app.get('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos);
    let palabras = frase.split(' ');
    res.json({ buscada: palabras[pos - 1] });
})

app.post('/api/palabras', (req, res) => {
    let { palabra } = req.body;
    frase = frase.concat(' ', palabra);
    let palabras = frase.split(' ');
    res.json({
        agregada: palabra,
        pos: palabras.length
    });
});
// camino de hormiga
// frase = 'Frase inicial'
// por body entra hola
// frase = 'Frase inicial hola'
// let palabras = frase.split(' ');
// palabras va  a guardar ['Frase','inicial','hola']
// damos repsuesta
// pos =3 porque hay 3 elementos ['Frase','inicial','hola']


app.put('/api/palabras/:pos', (req, res) => {
    let { palabra } = req.body;
    let pos = parseInt(req.params.pos) - 1;
    frase = frase.split(' ');
    let anterior = frase[pos];
    frase[pos] = palabra;
    res.send({
        actualizada: frase[pos],
        anterior
    })
})

app.delete('/api/palabras/:pos', (req, res) => {
    let pos = parseInt(req.params.pos) - 1;
    let fraseArreglo = frase.split(' ');
    console.log({fraseArreglo})
    const frasenew = fraseArreglo.filter((e, ix) => ix != pos);
    res.send (  frasenew )
});