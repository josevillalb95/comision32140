const Koa = require('koa')
const koaBody = require('koa-body')
const book= require('./book.js')
const app = new Koa()
app.use(koaBody())
app.use(book.routes())
app.use( async ctx => {
    ctx.body='HOLA MUNDO!'
    const req= ctx.request
    const res= ctx.response
    console.log({req})
    console.log({res})
})
app.listen(8080)