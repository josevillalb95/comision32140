const express= require('express')
const cookieParse= require('cookie-parser')
const app= express()
const PORT=8080
const router= express.Router()
app.use(cookieParse("asd123"))


// cookie{
//         "producto": "8",
//         "alumno": "lautaro"
//         "profe": "jose"  //cookie firmada
// }
// pero cuando recivo en el req
// req.cookies ={
//     "producto": "8",
//     "alumno": "lautaro"
// }
// req.signedCookies={ 
//     "profe": "jose"
// }


// const contador={}
// router.get('*',(req,res,next)=>{
//     const url=req.cookie.url
//     if(contador[url])
//         contador[url]=0
//     contador[url]=contador[url]+1
//     next()
// })
// setInterval(()=>{
//     Object.key(contador).forEach(url => {
//         db.increment({url:url},{increment:contador[url]})
//         delete(contador[url])
//     });
// },30000)


router.get('/get',(req,res)=>{
    // req.signedCookies => ME TRAE COOKIES FIRMADAS 
    // req.cookies => ME TRAE COOKIES NO FIRMADAS 
    const firmadas=req.signedCookies 
    const no_firmadas=req.cookies 
    res.json({no_firmadas,firmadas})
})

router.get('/create/:clave/:valor',(req,res)=>{
    const {clave,valor}=req.params
    const {expired,firmada}=req.query
    const opt={}
    if(firmada)
        opt['signed']=true
    if(expired)
        opt['maxAge']=50*1000
    console.log(opt)
    res.cookie(clave,valor,opt).send(`clave: ${clave} creada.`)
})

router.get('/delete/:clave',(req,res)=>{
    const {clave}=req.params
    res.clearCookie(clave).send(`clave: ${clave} eliminada.`)
})

app.use(router)
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
})