const cluster= require('cluster')
const http=require('http')
const numCpu = require('os').cpus().length
if(cluster.isPrimary){
    console.log("master On, Nro cpu => ",numCpu)
    for (let index = 0; index < numCpu; index++) {
        cluster.fork()
    }
    cluster.on('exit',(w)=>{
        console.log(`worker exit ${w.process.pid}. `)
    })
}else{
    http.createServer((req,res)=>{
        res.writeHead(200)
        res.end(`holaaa  ${process.pid}`)
    }).listen(3000)
    console.log( `worker ${process.pid} on`)
}