import {Request,Response} from 'express'
export const renderError=(req:Request,res:Response)=>{
    res.render("error",{errorMsj:'No se puedo actualizar el archivo'});
}