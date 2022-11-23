const originData= require('../ejemplo_vivo.json')
const normalz=require('normalizr')
const normalizar= normalz.normalize
const desnormalizar=normalz.denormalize
const util = require('util');

const userSchema= new normalz.schema.Entity('users')
// {
//     "id": string,
//     "nombre": string,
//     "apellido": string,
//     "DNI": string,
//     "direccion": string,
//     "telefono": string
// }
const commentSchema= new normalz.schema.Entity('comments',{
    commenter:userSchema
})
// {"commenter": userSchema}
const articleSchema = new normalz.schema.Entity('article',{
    author:userSchema,
    comments:[commentSchema]
})

// "author":userSchema,
// "comments": [commentSchema]
const postSchema = new normalz.schema.Entity('posts',{
    posts:[articleSchema]
})

const mostar=(obj)=>console.log=('-------')+console.log(util.inspect(obj, false, 12, true));

const objNormalizado= normalizar(originData,postSchema)

const objDesnormalizado= desnormalizar(objNormalizado.result,postSchema,objNormalizado.entities)

console.log('CANTIDAD DE CARACTERES ORIGINAL: ',JSON.stringify(originData).length)
console.log('CANTIDAD DE CARACTERES DESNORMALIZADO: ',JSON.stringify(objDesnormalizado).length)
console.log('CANTIDAD DE CARACTERES NORMALIZADO: ',JSON.stringify(objNormalizado).length)

mostar(objNormalizado)
