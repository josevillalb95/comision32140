const express = require('express');
const { engine } = require('express-handlebars');

const PORT = 8080;
const app = express();
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    const datos = {
        nombre: 'Julian',
        apellido: 'Fernandez',
        edad: '62',
        email: 'juli_fernandez@gmail.com',
        telefono: 2234434355
    }
    res.render('datos', datos);
})