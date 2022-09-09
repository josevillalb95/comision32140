// // tipo de dato s
// // primitivos 
// const string_="hola"
// const number_=2
// // tipo objetos
// const array_fail=[2,1,"22"]  //no
// const array_ok=[2,1,3]  //si
// let suma=0
// array_fail.forEach(a=>{
//     suma=suma+a
// })
// // 322
// const objeto_={  
//     name:'jose',
//     edad:27
// }
// const function_ = (nombre)=>{ return console.log("holaa "+nombre)}
// function_('jose')
// function_('curso')


// // es6 nuevos tipos 
// const tipo1="curso"
// // no se puede 
// tipo1=222

// let tipo2="jose"
// tipo2="jose profe"

// // var -> no hay que usarlo, pero es simil a let. pero no hay que usarlo porque 
// //  no resta el scope

// // scope
// // son los valores que se conocen entre las llaves. 
// // Tiene un orden jeraquico de afuera para adentro 
// {
//     let valor3=3
//     if(true){
//         // conosco valor3
//         console.log(valor3)
//         const valor4=4
//     }
//     // no conosco valor4
//     console.log(valor4)
// }
// // FUNCIONES
// const a=1
// const funcion_example=(importe,cvu,nombe,apellido)=>{
//     factura(importe,nombre)
//     Notification(nomber,cvu)
// }
// funcion_example(a,"string",[2,3])

// funcion_example(null,null,"jose","villaba")
// const funcion_example_MEJORA=(obj)=>{
//     factura(importe,nombre)
//     Notification(nomber,cvu)
// }
// // forma de escribir una funcion cuando si tiene poco o puede mutar los parametros de entrada
// funcion_example_MEJORA({nombre:'jose',apellido:'villalba'})

// // funcion anonima autoinvocadaa
// (function(){ return console.log(2+2) })()


// // combinacion de funciones ! anonimas + declaras 
// const funcion_mix=(nombre,callback)=>{
//     console.log(nombre)
//     callback()
// }
// funcion_mix('hola jose',function(){
//     console.log('chau ')
// })


// // CLOUSURE 
// const functionee=()=>{
//     return "jose"
// }
// console.log('holaa '+functionee() )
// //  SE USA PARA MODULAR
// // EJEMPLO FACUTRACIONS
// const fucturar=()=>{
//     const impuesto=getImpuesto(monto,cuit) //calcula impuesto ej return 2300,30
//     const pdf=generarPdf(impuesto, cuit) // con el valor del impuesto genero el pdf ej return http:google.driive.pdf/1231231
//     return pdf
// }

// console.log("link de mi facutra: ",factura())



// // TEMPLATE STRING 
// // antes 
// const nombre_ejemplo='juan'
// let texto=" hola "+nombre_ejemplo+" como andas? /n"
// texto+='muy bien, aprendiendo js/n'
// texto+="chau."
// // con template string 
// const texto_mejorado=`
//     hola ${nombre_ejemplo} como andas?
//     muy bien, aprendiendo js
//     chau.
// `

//  punto uno
// const mostrarLista=(lista)=>{
//     // mejoras
//     // lista.length==0 es lo mismo que !lista.length
//     // lista== null  es lo mismo a !lista

//     if(lista== null )
//         return 'lista vacia'
//     if(lista.length==0)
//         return 'lista vacia'

//     let msj=""
//     lista.forEach( item =>{
//             msj+=`${item},`
//         }
//     )
//     return msj
// }

// console.log( mostrarLista(["jose",'flor','antonella','marcos']))
// console.log( mostrarLista()) // retorna lista vacia 


// ( 
//     function(lista){
//         // mejoras
//         // lista.length==0 es lo mismo que !lista.length
//         // lista== null  es lo mismo a !lista

//         if(lista== null )
//             return console.log('lista vacia')
//         if(lista.length==0)
//             return console.log('lista vacia')
//         let msj=""
//         lista.forEach( item =>{
//             msj+=`${item},`
//         }
//         )
//         return console.log(msj)
//     }
// )(["jose2",'flor2','antonella2','marcos2','alan']) 


// const duplicar =(num1 ) => num1*2
// const triplicar =(num1 ) => num1*3
// const crearMultiplicar=(num1,num2)=>{
//     const multiplicacion=num1*num2
//     console.log("multiplicacion:"+multiplicacion)
//     console.log("su doble: ",duplicar(multiplicacion))
//     console.log("su triple: ",triplicar(multiplicacion))
// }
// crearMultiplicar(2,3)


// class persona {
//     // atributos
//     colorPelo=""
//     colorOjos=""
//     edad=""
    
//     // metodo resevado para iniciliar los atributos
//     constructor(pelo,colorOjos,edad){
//        this.colorOjos=colorOjos
//        this.colorPelo=pelo
//        this.edad=edad 
//     }
//     // metodos

//     mover(){
//         console.log("caminar")
//     }
//     setColorPelor(color){
//         this.colorPelo=color
//     }
//     getColorPelo(){
//         return this.colorPelo;
//     }
//     misAtributos(){
//         console.log(
//             `
//             tengo color de pelo ${this.colorPelo}
//             tengo ojos ${this.colorOjos}
//             mi edad es: ${this.edad}
//             `
//         )
//     }
// }

// const jose = new persona("negro",'verde',27)
// jose.misAtributos()
// jose.setColorPelor("castanio")
// if(jose.getColorPelo()=='castanio')
//     console.log("es verdad es castanio!!")
// jose.misAtributos()
// console.log('---------------')

// const claudio = new persona("rubio",'marrones',27)
// claudio.misAtributos()



// ACTIVIDAD!
// class contador {
//     name
//     cuenta
//     constructor(name){
//         this.name=name
//         this.cuenta=0
//     }
//     obtenerResponsable(){
//         return `soy el responsable: ${this.name}`
//     }
//     obtenerCuentaIndividual(){
//         return `Mi cuenta es: ${this.cuenta}`
//     }
//     setCuenta(){
//         this.cuenta=this.cuenta+1;
//     }

// }

const contador1=new contador('juan')
contador1.setCuenta()
contador1.setCuenta()
contador1.setCuenta()
contador1.setCuenta()
contador1.setCuenta()
console.log(contador1.obtenerCuentaIndividual())
console.log(contador1.obtenerResponsable())
console.log("-----------")
const contador2=new contador('pablo')
contador2.setCuenta()
console.log(contador2.obtenerCuentaIndividual() )
console.log( contador2.obtenerResponsable() )


// Object[] 
//  significa
// [{
//     cod:1
// },
// {
//     cod2
// }]

// String[]
//  significa
// ['aaA','vvvv','gggg']
// EJEMPLO DE ACTICIDAD
// const new usuario(
//     'nombre',
//     'apellid',
//     [{'nombre':'viaje al centro de la tierra'},{'nombre':'la vida es bella'}],
//     ['perro','gato']
//     )