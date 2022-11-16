import express from 'express'
import {create} from 'express-handlebars'
import routerError from './routes/error.router';
import routerHome from './routes/home.router';
import routerTask from './routes/task.router';
import {connect} from './database/connect'


const app = express();
const PORT = 3000;
const URL_DB=process.env.URL_DB||'mongodb://localhost:477/afterClass'

const hbs = create({
extname: ".hbs",
helpers: {
    debug(data:any) { return  console.log(data) },
    
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

app.use("/", routerHome);
app.use("/tasks", routerTask);
app.use("*", routerError);


app.listen(PORT, () => {
    connect(URL_DB)
    console.log(`Server listeting on port ${PORT}`)
});