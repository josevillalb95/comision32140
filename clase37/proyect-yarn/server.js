const express = require('express')
const PORT= process.env.PORT||8080
const app = express()
app.get('/',(req,res)=>{
    res.send("hola yarn ! ")
})
app.listen(PORT,()=>{
    // npm install express => yarn add express
    // instalar package.json npm install => yarn (solo)
    // ejecutar script  npm run dev => yarn dev 
    // inicializar npm init -y => yarn init -y
    console.log("server escuchando en el PORT ",PORT)
})

