// UNA PROMESA ES UN OBJETO QUE RETORNA 2 POSIBLES ESTADOS 
//  * PENDIENTE
//  * ESTADO EXITO  ( RESOLVED )
//  * ESTADO FALLIDO ( REJECT )
// LA IDEA DE UNA PROMESA ES SIMILAR A LA DE UN CALLBACK
//  TENER QUE RESOLVER UN PROBLEMA Y DAR RESPUESTA SI RESULTO EXITOSO O NO . 

// EJEMPLO PARA VER SU SINTAXIS
const divisionPromesa=(valor1,valor2)=>{
    // SE CREA UNA INSTANCIA DE PROMISE EL CUAL TIENE UN CALLBACK QUE DA COMO RESULTADO 
    // 2 PARAMETOS QUE SE TIENE QUE USAR PARA EL CASO DE QUE SEA UN EXITO O QUE FALLE 
    return new Promise( (resolve, reject)=>{
        if( valor1 < 1 || valor2 < 1)
            // NO SE PUEDE HACER UNA DIVISION POR CERO/ RETORNO REJECT PORQUE ES UN ERROR
            reject('los valores tiene que ser mayor a cero ')
        else
            // RETORNO RESOLVE PORQUE SE PUEDE HACER LA DIVISION SIN PROBLEMAS.
            resolve(valor1/valor2)
    })
}

divisionPromesa(2,4)
    // THEN SIGNIFICA QUE LA OPERACION FUE UN EXITO
    .then( resultado=>console.log("OPERACION OK "+resultado))
    // CATCH SIGNIFICA QUE LA OPERACION FALLO
    .catch(resultado=>console.error("OPERACION FALLIDA "+resultado))


divisionPromesa(2,-2)
    // THEN SIGNIFICA QUE LA OPERACION FUE UN EXITO
    .then( resultado=>console.log("OPERACION OK "+resultado))
    // CATCH SIGNIFICA QUE LA OPERACION FALLO
    .catch(resultado=>console.error("OPERACION FALLIDA "+resultado))

// SE PUEDE ANIDAR THEN  PARA PODER PASAR DATOS EN CADA INSTANCIA 
divisionPromesa(4,2)
    // RESULTADO ES 2
    // al RESULTADO LE SUMO 10  
    .then( resultado1=>resultado1+10 )
    // RESULTADO ES 12 
    // al RESULTADO LO DIVIDO POR 3
    .then( resultado2=>resultado2/3 )
    // RESULTADO ES 4
    .then( resultado4 => console.log(`Resultado de then anidado ${resultado4}`))
    // CATCH SIGNIFICA QUE LA OPERACION FALLO
    .catch(resultado=>console.error("OPERACION FALLIDA "+resultado))




// EJEMPLO EN VIVO 
const parametroEjemploVivo=30
Promise.resolve(parametroEjemploVivo)
.then( x => x + 1 )
// 21 | 11 |31
.then( x => x * 2 )
// 42 | 22 | 62
.then( x => {
    // FALLO
    if(x==22) throw new Error('Error')
    else return 80
})
// 80 | X | 80
.then( x => 30 )
// 30| X | 30
.then( x => x / 2 )
// 15| X | 15Å
.then( console.log )
// ENTRA EN CASO QUE EL PARAMETRO ES 10
.catch( console.log )

// const EjerVivo= (valor) => {
//     new Promise( (resolve, reject)=>{
//         if(valor1==0)
//             reject()
//     })
// }