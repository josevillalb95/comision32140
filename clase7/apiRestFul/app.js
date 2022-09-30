const CRUD = require('./crudArchivo');
const express = require('express');

const PORT = 8080;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const server = app.listen(process.env.PORT || PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

const productosArchivo = new CRUD('productos.txt');

app.get('/productos', async (req, res) => {
    const mostrarProductos = await productosArchivo.getAll();
    res.json(mostrarProductos);
})

app.post('/productos', async (req, res) => {
    const producto=req.body
    console.log(req.body)
    const productosCreado = await productosArchivo.create(producto)
    res.json({productosCreado});
})


let modificando=false
app.put('/productos/:id', async (req, res) => {
    if(modificando==true)
        return "NO TERMINO EL GURDADO ANTERIOR"
    modificando=true
    const id = req.params.id
    console.log(req.body)
    const producto=req.body
    const productosActualizado = await productosArchivo.modify(id,producto)
    modificando=false
    res.json({productosActualizado});
})


app.delete('/productos/:id', async (req, res) => {
    const id = req.params.id
    const producto= await productosArchivo.delete(id)
    res.send(producto);
})

app.get('/productos/:id', async (req, res) => {
    const id = req.params.id
    const producto= await productosArchivo.getById(id)
    res.send(producto);
})



// EJEMPLOS PEDIDOS

app.post('/ejemplo/:id', async (req, res) => {
    console.log('BODY-> ',req.body)
    console.log('PARAMS-> ',req.params)
    console.log('QUERY-> ',req.query)
    res.send(true)
})
// TEORIA

// dominio/productos/id
// para obtener este id tengo que hacer req.params.id

// dominio/productos?id=2&name=jose
// para obtener este id req.query.id
// para obtener este name req.query.name


// cuando hacemos un post / put / delete
// estas reciben la informacion por body ( body es informacion que  se pasa pero no es visible en la url )
// para obtener el json es req.body


// cuando hacemos un post / put / delete tambien podes agregar query y params 
// => POST  /PRODUCTOS/:ID/ALTA
// ID=REQ.params.ID
// DATOS=REQ.body



// PARAMS EN DELETE
// QUERY PARAMS EN GET
// BODY PARAMS EN POST/PUT