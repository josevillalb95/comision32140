export const auth=(req,res,next)=>{
    if(req.query?.auth == 'comision32140')
        return next()
    res.status(400).json({error:'sin acceso'})
}