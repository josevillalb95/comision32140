// previo a usar express tenemos que hacer 'npm i express'
const express = require('express')
// inicializo express 
const app = express()
const PORT = 8080

// creeo ruta home 
// me devuelve un callback con 
// req que seria los datos de entrada  bodu, url , header 
// res seria el metodo para poder responderle al cliente 
app.get('/', (req, res) => {
    res.json({ mensaje: 'hola mundo desde get' })
 })
 
 app.post('/', (req, res) => {
    res.send({ mensaje: 'hola mundo desde post' })
 })
 app.put('/',(req,res)=>{
    res.send({ mensaje: 'hola mundo desde put' })
 })
 
 app.get('/saludo',(req,res)=>{
    res.send({ mensaje: 'saludo mundo' })
 })

 app.get('/chau',(req,res)=>{
     console.log({req})
    res.send({ mensaje: 'chau mundo' })
 })
 // cree servidor en express 
const server = app.listen(PORT, () => {
    // indico que inizializo 
   console.log(`Servidor http escuchando en el puerto  ${server.address().port}`)
})

// indico que fallo 
server.on("error", error => console.log(`Error en servidor  ${error}`))