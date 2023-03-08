import { Application, Context } from "./deps.ts";
const app = new Application()
app.use( (ctx:Context)=>{
    ctx.response.body= 'Hola Comision 32140'
})
app.listen({port:8080})