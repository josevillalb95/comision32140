const express= require('express')
const PORT=process.argv[2]||2231
const app=express()
const router=express.Router()
router.get('/',(req,res)=>{
    const fecha=new Date().toLocaleDateString()
    res.send(`Servidor express en (${PORT}) - PID (${process.pid}) - (${fecha}) xD `)
})
app.use('/datos',router)
app.listen(PORT,()=>{
    console.log(`SERVIDOR ON ${PORT} - PDI ${process.pid} `)
})