const validType=(valor)=>{
    if(typeof(valor)=='string')
        return parseInt(valor)
    if(typeof(valor)=='number')
        return valor
    throw new Error("valor invalido")
}
const suma= (a,b)=> validType(a)+validType(b)
const resta= (a,b)=> validType(a)-validType(b)
const multiplicacion= (a,b)=> validType(a)*validType(b)
const division= (a,b)=> {
    const aa=validType(a)
    const bb=validType(b)
    if(!bb || !aa)
        throw new Error('Los operadores no pueden ser cero')
    return aa/bb
}
module.exports = {
    resta,
    multiplicacion,
    division,
    suma
}