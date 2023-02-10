import express, { json } from 'express'
export const app = express()
const numeros = []
app.use(json())
app.post('/ingreso', (req, res) => {
    let { numero } = req.body
    numeros.push(numero)
    res.send(`Número ${numero} almacenado`)
})
app.get('/egreso', (req, res) => {
    res.json({ numeros })
})
