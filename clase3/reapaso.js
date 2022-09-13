// REPASO CLASE ANTERIOR 
// 1 FUNCIONES 
function example( parametro1, parametro2){
    return "respuesta"
}
// para declarar / llamar 
const funcionEjemplo=example('parametro1','parametro2')
console.log(funcionEjemplo)
// las funciones son objetos por ende se pueden
// guardar en una const 
const constFunction = function(pramatro){ return console.log(`respuesta: ${pramatro}`) }
// Se ejecuta de la misma manera
constFunction('le paso los parametros ')

// FORMAS DE ESCRIBIR FUNCIONES SIMPLIFICADAS 2.0
    //  SI TIENE UN SOLO PARAMETROS NO HACE FALTA PONER LAS ()
    const funcionUnParametro= parametro=>{return parametro}

    // si solamente tiene una sola instruccion no hace falta poner las llaves {}, ni el return 
    const functionSimple= parametoMsj=>console.log(parametoMsj);
    // o tambien  ( esta funcion calcular la mitadad del parametros llamado 'mitad')
    const funcionImplicita = mitad => mitad/2
    // esto es lo mimso que 
    const funcionImplicita = function(mitad){ 
        return mitad/2
    }

