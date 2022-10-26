export default validAdmin=(req,res,next)=>{
    // ejemplo http://localhost:8080/api/productos?admin=true
    if(req.query.admin)
        next()
    else
        res.send( { error :  -1, descripcion: " ruta no autorizada" })
}