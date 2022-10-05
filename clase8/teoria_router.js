const express = require('express')
const { Router } = express
const app = express()

// iniciando mini app para API
// CREO INSTANCIAS DEL ROUTER DE EXPRESS
const routerApi = Router()
routerApi.get('/recurso', (req, res) => {
   res.send('get ok')
})
routerApi.post('/recurso', (req, res) => {
   res.send('post ok')
})
app.use('/funciones', routerApi)
// CREE LAS SIGUENTES RUTAS 
// GET: /api/recurso
// POST: /api/recurso
// FIN mini app API

// iniciando mini app para USER
const routerUser= Router()
// CREO INSTANCIAS DEL ROUTER DE EXPRESS
routerUser.get('/login', (req, res) => {
    res.send('login ok')
 })
 routerUser.post('/logout', (req, res) => {
    res.send('logout ok')
 })
app.use('/user', routerUser)

// CREE LAS SIGUENTES RUTAS 
// GET: /user/login
// POST: /user/logout
// FIN mini app USER

app.use('/user', routerApi)
// CREE LAS SIGUENTES RUTAS 
// GET: /user/recurso
// POST: /user/recurso
// FIN mini app API


app.listen(8080)












// antes clase 7
app.get('/product', async (req, res) => {
   const mostrarProductos = await productosArchivo.getAll();
   res.json(mostrarProductos);
})
app.post('/product', async (req, res) => {
   const producto=req.body
   console.log(req.body)
   const productosCreado = await productosArchivo.create(producto)
   res.json({productosCreado});
})
// hoy clase 8
routerProductos.get('/', async (req, res) => {
   const mostrarProductos = await productosArchivo.getAll();
   res.json(mostrarProductos);
})
routerProductos.post('/', async (req, res) => {
   const producto=req.body
   console.log(req.body)
   const productosCreado = await productosArchivo.create(producto)
   res.json({productosCreado});
})
// para organizar con router quedaria asi 
const routerProductos = Router()
app.use('/product', routerProductos)
// CREE LAS SIGUENTES RUTAS 
// GET: /product
// POST: /product
// FIN mini app API

