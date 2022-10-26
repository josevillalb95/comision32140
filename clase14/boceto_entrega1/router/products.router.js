import express from "express";
import {validAdmin} from '../middlewars'
const routerProduct = express.Router()
const CRUD=require('../../../after1/tareas/server')
const tareasFunction=new CRUD('productos.txt')
routerProduct.get('/:id?',validAdmin,(req,res)=>{
    if(req.params.id)
        return res.send(await tareasFunction.getById(req.params.id) )
    else
        res.send(await tareasFunction.getAll() )
})
export default routerProduct