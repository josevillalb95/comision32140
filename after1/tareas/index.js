const express = require('express');
const { create } = require('express-handlebars');

const  indexRoutes = require('./routes/index');
const  tasksRoutes  = require('./routes/tasks');
const  errorRouter  = require('./routes/error');

const app = express();
const port = 3000;

const hbs = create({
    extname: ".hbs",
    helpers: {
    }
 });



//  aca le decimos que usamos handlebars como motor de plantilla
app.engine('.hbs', hbs.engine);

// establecemos el motor de plantillas que vamos a usar 
app.set('view engine', '.hbs');

// establecemos el directorio donde estan nuestra plantillas 
app.set('views', './views');

// establecemos la carpeta donde estan nuestro achivos publicos
app.use(express.static('public'))

// Permite recibir parámetros en formato JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoutes);
app.use("/error", errorRouter);
app.use("/tasks", tasksRoutes);


app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});