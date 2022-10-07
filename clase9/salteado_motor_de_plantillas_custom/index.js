const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`) });
server.on('error', err => { console.log(err) });

app.engine('cte', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        const rendered = content.toString()
            .replace('^^titulo$$', options.titulo)
            .replace('^^mensaje$$', options.mensaje)
            .replace('^^autor$$', options.autor)
            .replace('^^version$$', options.version)
            .replace('^^nombre$$', options.nombre)
            .replace('^^apellido$$', options.apellido)
            .replace('^^fecha$$', options.fyh)
        return callback(null, rendered);
    })
});

app.set('views', './views');
app.set('view engine', 'cte');

app.get('/cte1', (req, res) => {
    const datos = {
        titulo: 'Título de la plantilla',
        mensaje: 'Mensaje de la plantilla',
        autor: 'Autor de la plantilla',
        version: 123456789
    }
    res.render('plantilla1', datos);
});

app.get('/cte2', (req, res) => {
    const datos = {
        nombre: 'Esteban',
        apellido: 'Zárate',
        fyh: new Date()
    }
    res.render('plantilla2', datos);
});