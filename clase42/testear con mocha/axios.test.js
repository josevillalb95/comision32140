import axios from  'axios'
import {strictEqual, deepStrictEqual} from 'assert'
const enviar =numeros=> axios.post('http://localhost:8080/ingreso',{numeros})
const recibir =()=> axios.get('http://localhost:8080/egreso')
describe("comparar que servidor funcione bien",function(){
    it('deberia guardar estos 10 numeros', async function(){
        for( let i=0; i< 10; i++) await enviar(i)
        const {data}= await recibir()
        strictEqual(data.numeros.length, 10 )
        deepStrictEqual(data.numeros,[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])

    })
})