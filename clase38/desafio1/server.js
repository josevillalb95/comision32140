import express from "express";
import * as router from './rutas/index.js'
const app = express()
const PORT=8080
app.get("/",(req,res)=>{ res.send("esta vivo")})
app.use('/operaciones',router.routerOperaciones)
app.listen(PORT,()=>{
    console.log(`servidor escuchando en el puerto ${PORT} `)
})