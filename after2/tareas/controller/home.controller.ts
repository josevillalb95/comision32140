import {Request,Response} from 'express'
export const renderHome=(req:Request,res:Response)=>{
    res.render("index");
}