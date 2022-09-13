// SINCRONICO 
//      SIGNIFICA QUE LA EJECUCION ES SECUENCIAL. OSEA LINEA A LINEA ( COMO TOO LO QUE VENIMOS VIENDO AHORA MISMO ).
// ASINCRONICO NO BLOQUEANTE
//      * SIGNIFICA QUE EN LA EJECUCION, TODOS LOS PROCESOS SE HACE SECUENCIAL, PERO NO OBTENERMOS TODOS LOS RESULTADOS DE 
//      MANERA SECUENCIAL ALGUNOS SIMPLEMENTE SE INVOCAN Y SU RESULTADO PUEDE LLEGAR A FUTURO
//      * EJEMPLO VIDA REAL ES UN CHAT DE WHATSAPP. 
// ASINCRONICO BLOQUEANTE
//      ESPERA A QUE LA PETICION SINCRONICA SE CUMPLA PARA CONTINUAR LA SIGUIENTE LINEA ( USANDO LA PALABRA "AWAIT")


// EJEMPLO CODIGO VS
// SINCRONICO
function llamadoUno(){
    // MUESTRO 1 
    // LUEGO LLAMO A LA FUNCION 2
    // MUESTRO TODO LO DE ESA FUNCION Y SUS LLAMADOS INTERNOS
    // MUESTRO 6
    console.log(1)
    llamadoDos()
    console.log(6)
}
function llamadoDos(){
    console.log(2)
    llamadoTres()
    console.log(5)
}
function llamadoTres(){
    console.log(3)
    console.log(4)
}

llamadoUno()

// ASINCRONICO NO BLOQUEANTE
function llamadoUnoAsync(){
    // MUESTRO 1
    // HAGO EL LLAMADO A LA FUNCION 2 
    // MUESTRO 6
    // RECIBO EL RESULTADO DE LA FUNCION 2 LUEGO DE UNOS SEGUNDOS
    // MUESTRO 2
    // HAGO LA LLAMADA A LA FUNCION 3
    // MUESTRO 5
    // RECIBO EL RESULTADO DE LA FUNCION 3 LUEGO DE UNOS SEGUNDOS
    // MUESTRO 3
    // MUESTRO 4

    console.log(1)
    llamadoDosAsync()
    console.log(6)
}
function llamadoDosAsync(){
    setTimeout( ()=>{
        console.log(2)
        llamadoTresAsync()
        console.log(5)
    },2000)
    
}
function llamadoTresAsync(){
    setTimeout( ()=>{
        console.log(3)
        console.log(4)
    },2000)
}
llamadoUnoAsync()



// ASINCRONICO NO BLOQUEANTE CASO LABORAL 
// se necita que la peticion a un ruta no demore mas de 2segundos 
// esta ruta nos informa el pago en nuestra cuenta 
// pero nostos tenemos que realizar todas estas tareas: 
// 1) buscar si el pago entrante nos pertenece en nuestra base de datos y si esta pendiente
// 2) guardar registro del movimiento de plata en nuestra cuenta
// 3) actualizar el estado del pago en base de datos a finalizado
// 4) responderle 
const reciboPagoAsycnBloqueante=(id_pago)=>{
    const order= await buscoBaseDatosPagos({'id':id_pago,'estado':'pendiente'})
    if(!order)
        return 'fail'
    await guardoRegistro({'id':id_pago,'estado':'pagado'})
    await actualizoBaseDatosPagos({'id':id_pago,'estado':'finalizado'})
    return "ok"
}
// el llamado reciboPagoAsycnBloqueante tarda al rededor de 7seg 

const reciboPagoAsycnNoBloqueante=(id_pago)=>{
    const order= await buscoBaseDatosPagos({'id':id_pago,'estado':'pendiente'})
    if(!order)
        return 'fail'
     guardoRegistro({'id':id_pago,'estado':'pagado'})
     actualizoBaseDatosPagos({'id':id_pago,'estado':'finalizado'})
    return "ok"
}
// el llamado reciboPagoAsycnNoBloqueante tarda al rededor de 1/2seg
// porque no espero a que los demas procesos terminen, solamenten espero buscoBaseDatosPagos.

const escribirArchivo= './libreria.js'
// CASO CALLBACK
escribirArchivo('hola mundo', () => {
    console.log('terminé de escribir el archivo')
})
// LOS PASAMOS A PROMESAS
escribirArchivo('hola mundo')
.then(resultado=>console.log('terminé de escribir el archivo'))
.catch(error=>console.log('falle al escribir el archivo'))
// async
try{
    await escribirArchivo('hola mundo')
    console.log('terminé de escribir el archivo')
}
catch(e){
    console.log('falle al escribir el archivo')
}