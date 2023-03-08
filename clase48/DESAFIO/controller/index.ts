
import { ObjectId } from "../deps.ts";

import {productDB} from '../db/index.ts'
export const findProducto = async(ctx) =>{
    try{
        const allProduct = await productDB.find({}).toArray();
        ctx.response.body = { evento: 'find', data:allProduct}
    }
    catch(err){
        ctx.response.body = {
            success: false,
            msg: err.toString(),
          };
    }
}
export const deleteProducto = (ctx) =>{
    ctx.response.body = { evento: 'delete'}
}
export const createProducto = async(ctx) =>{
    try{

        const productoSync = await ctx.request.body();
        const producto = await productoSync.value;
        producto._id=await ObjectId.generate()
        console.log({producto})
        await productDB.insertOne(producto)
        ctx.response.body = { evento: 'create'}
    }
    catch(err){
        console.log(err)
        ctx.response.body = {
            success: false,
            msg: err.toString(),
          };
    }
}
export const updateProducto = (ctx) =>{
    ctx.response.body = { evento: 'update'}
}