import * as opMath from 'op-math-basic'
import { db } from '../persistencia/index.js'
const guardar=(tipo,params,result)=>{
   return {
        tipo,
        params,
        result,
        timestamp:new Date().toISOString()
    }
}

const suma=(n1,n2)=>{
    const sumaOP=opMath.suma(n1,n2)
    db.guardar( guardar('suma',[n1,n2],sumaOP))
    return sumaOP
}

const resta=(n1,n2)=>{
    const restaOP=opMath.resta(n1,n2)
    db.guardar( guardar('resta',[n1,n2],restaOP))
    return restaOP
}
const listar=async ()=>{
    return await db.listar()
}
export { suma, resta , listar}