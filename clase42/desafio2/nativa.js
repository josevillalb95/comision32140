import { request } from 'http'
const opt={
    hostname:'localhost',
    port:8080,
    path:'/',
    method:'GET'
}
const req= request(opt,res=>{
    let respuesta=''
    res.on('data',data=>{
        respuesta+=data
    })
    res.on('end',()=>{
        console.log(JSON.parse(respuesta))
    })
})
req.on('error',er=>console.log({er}))
req.end()