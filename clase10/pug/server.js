const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    const { min, nivel, max, titulo } = req.query;
    const lista=["profesor",'tutor','alumno']
    const condicion=false
    res.render('index.pug', { min, nivel, max, titulo,lista,condicion });
})

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', (err) => console.log(`Error: ${err}`));