// ES PASARA UNA FUNCION COMO PARAMETROS
// RECORDAR QUE LAS FUNCIONES SON DE TIPO OBJETO. POR ENDE SE PUEDE TRATAR COMO CONSTANTES/LET
// CALLBACKS TIPS/ CONVENCIONES
//*    CALLBACK SIMPRE ES EL ULTIMO PARAMETRO DE LA FUNCION
//*    EL PRIMER PARAMETRO QUE RECIBE EL CALLBACK SUELE INFORMA SI SE LLAMA CON ERROR O NO 
//*   SUELE RECIBIR 2 O MAS PARAMETROS 

// EJEMPLO
const primerLLamado=( parametro, funcion)=>{
    console.log('PRIMERA LLAMADA: '+parametro)
    funcion()
}
const segundoLLamado=( parametro, funcion)=>{
    console.log('SEGUNDA LLAMADA: '+parametro)
    funcion()
}

const tercerLLamado=( parametro)=>{
    console.log('TERCER LLAMADA: '+parametro)
}

// declaro/llamo la primera funcion
primerLLamado('uno',function(){
    // en este paso primera funcion termino su proceso 
    // y puedo llamara a la segunda funcion
    segundoLLamado('dos',()=>{
        // en este paso la segunda funcion termino su proceso 
        // y puedo llamara a la tercera funcion
        tercerLLamado('tres')
    })
})

// FORMA DE EXPRESAR ERROR EN LOS CALLBACK 
const dividir=( valor1,valor2,callback)=>{
    let valoresValidos= false
    if(valor1>0 && valor2>0)
        valoresValidos=true
    // valores validos va a tener el valor true si los dos parametos son mayor que cero
    // caso contrario es false
    // llamo al callback
    callback(valoresValidos,valor1,valor2)
}
const dividirCallback=(numerosOK,valor1,valor2)=>{
    if(numerosOK == false)
        // si numerosOK es false returno
        return console.log('NUMEROS INVALIDOS')
    console.log('RESULTADO DIVISION: ',valor1/valor2)
}
dividir(10,2,dividirCallback)
console.log('caso erroneo:')
dividir(2,-3,dividirCallback)


// EJEMPLO EN VIVO 
const operacion=(parametro1,parametro2,operacionCallback)=>{
    console.log(`RECIBO ${parametro1} y ${parametro2}`)
    operacionCallback(parametro1,parametro2)
}
operacion(3,4,(valor1,valor2)=>console.log(`Voy a sumar: ${valor1+valor2} .`) )
operacion(3,4,(valor1,valor2)=>console.log(`Voy a dividir: ${valor1/valor2} .`) )
operacion(3,4,(valor1,valor2)=>console.log(`Voy a multiplicar: ${valor1*valor2} .`) )