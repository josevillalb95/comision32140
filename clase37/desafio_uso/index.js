
const express = require('express')
const calculator = require('op-math-basic');
const PORT= process.env.PORT||8080
const app = express()
app.get('/suma',(req,res)=>{
    const {v1,v2}=req.query
    res.send("La suma es: "+calculator.suma(v1,v2))
})
app.get('/resta',(req,res)=>{
    const {v1,v2}=req.query
    res.send("La resta es: "+calculator.resta(v1,v2))
})
app.listen(PORT,()=>{
    console.log("server escuchando en el PORT ",PORT)
})


