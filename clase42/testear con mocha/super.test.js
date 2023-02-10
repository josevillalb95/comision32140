import request from 'supertest'
import {expect} from 'chai'
import { app } from './app.js'
describe("Comprobando que el servidor funcione bien", function () {
    it(' guardar', async function () {
        const numero=2
        const response=await request(app).post('/ingreso').send({numero})
        expect(response.status).to.equal(200)
        expect(response.text).to.equal(`Número ${numero} almacenado`)
    })
    it('recibir ', async function () {
        const response=await request(app).get('/egreso')
        expect(response.body.numeros).to.deep.equal([2])
    })
})