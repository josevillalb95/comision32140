import {NextFunction, Request,Response} from 'express'
export const validFormTask=(req:Request,res:Response,next:NextFunction)=>{
    const { title, description } = req.body;
    if(!title|| !description)
        return res.redirect("/error");
    next()
}