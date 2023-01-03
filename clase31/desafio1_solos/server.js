import express from "express";
import compression from "compression";
const app= express()
const mensaje='Hola que tal'
const mensajeLargo=(msj,longitud)=>{
    let result=""
    for (let index = 0; index < longitud; index++) {
        result+=msj
    }
    return result
}

app.get('/saludo',(req,res)=>{
    res.status(200).send( mensajeLargo(mensaje,10000))
})
app.get('/saludozip',compression(),(req,res)=>{
    res.status(200).send( mensajeLargo(mensaje,10000))
})
const PORT= 8080
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})