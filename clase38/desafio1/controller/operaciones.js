import {opMath} from '../negocio/index.js'
const suma= (req,res)=>{
    try{

        const {a,b }=req.query
        const sumaOP = opMath.suma(a,b)
        res.json({
            "result":sumaOP
        })
    }
    catch(e){
        res.send(500)
    }
}

const resta= (req,res)=>{
    try{

        const {a,b }=req.query
        const restaOP = opMath.resta(a,b)
        res.json({
            "result":restaOP
        })
    }
    catch(e){
        res.send(500)
    }
}
const listar = async(req,res)=>{
    try{
        res.json(await opMath.listar())
    }
    catch(e){
        res.send(500)
    }
}

export { 
    suma,
    resta,
    listar
}