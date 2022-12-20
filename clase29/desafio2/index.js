const express= require('express')
const cluster=require('cluster')
const cpus=require('os').cpus()
const PORT=process.argv[2]||2311
const app=express()
const router=express.Router()
router.get('/',(req,res)=>{
    const fecha=new Date().toLocaleDateString()
    res.send(`Servidor express en (${PORT}) - PID (${process.pid}) - (${fecha})`)
})
app.use('/',router)
if(cluster.isPrimary){
    const lengthCpu=cpus.length
    for (let index = 0; index < lengthCpu; index++) {
        cluster.fork()
    }
}else{
    app.listen(PORT,()=>{
        console.log(`SERVIDOR ON ${PORT} - PID ${process.pid} `)
    })
}

