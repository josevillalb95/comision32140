const express = require('express');
const PORT = 8080;
const app = express();
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', () => console.log(`Error: ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let personas = [];

app.get('/personas', (req, res) => {
    res.render('index', { personas });
})


app.post('/personas', (req, res) => {
    const { nombre, apellido, edad } = req.body;
    personas.push({ nombre, apellido, edad });
    res.redirect('/personas')
});