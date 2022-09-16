// Ejemplo Ejecución Sincrónica
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



// Ejemplo Ejecución Asincrónica (manipulacion)
function llamadoAsync( parametro1,callback){
    setTimeout( (parametro1)=>{
        console.log("muestro: ",parametro1)
        callback()
    },2500,parametro1,callback)
}
llamadoAsync("Hola!",function(){
    console.log('termino')
})


// EJEMPLO setInterval
let iteraciones = 0;
const interval = setInterval(foo, 2000);
function foo() {
    iteraciones++;
    console.log("ITERACON NUMERO: ",iteraciones)
    if (iteraciones >= 5){
        console.log("PARO LA ITERACON  ")
        clearInterval(interval);
    }
}


// EJEMPLO EN VIVO 
console.log("3e6",3e6)
const delay = ret => {for(let i=0; i<ret*3e6; i++);}
function hacerTarea(num) {
 console.log('haciendo tarea ' + num)
 delay(100)
}
console.log('inicio de tareas');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('fin de tareas')
console.log('otras tareas ...')


// opcion 1 
// inicio de tareas
// haciendo tarea 1
// haciendo tarea 2
// haciendo tarea 3
// haciendo tarea 4
// fin de tareas
// otras tareas

// opcion 2
// inicio de tareas
// fin de tareas
// otras tareas
// haciendo tarea 1
// haciendo tarea 2
// haciendo tarea 3
// haciendo tarea 4


// respuesta opcion 1

// ------
function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num)
    setTimeout(cb,100)
}
console.log('inicio de tareas');
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas ...')

// opcion1 
// 'inicio de tareas');
// haciendo tarea 1
// haciendo tarea 2
// haciendo tarea 3
// haciendo tarea 4
// fin de tareas'
// 'otras tareas ...


// opcion 2
// 'inicio de tareas');
// 'otras tareas ...
// haciendo tarea 1
// haciendo tarea 2
// haciendo tarea 3
// haciendo tarea 4
// fin de tareas'


// respuesta: ninguna de las 2 :
// porque una parte la funcion hacerTarea no es asincronica 
// por ende se ejecuta al instante 
// 'inicio de tareas');
// haciendo tarea 1
// 'otras tareas ...
// haciendo tarea 2
// haciendo tarea 3
// haciendo tarea 4
// fin de tareas'






// EJERCICIO 
function mostrarLetras(palabra, callback) {
    let i = 0
    const timer = setInterval(() => {
        // palabra.length hola su length es 4
        // hola -> hola[0] = h , hola[1]=o ... 
      if (i < palabra.length) {
        console.log(palabra[i])
        i++
      } else {
        clearInterval(timer)
        callback()
      }
    }, 1000) // 1 SEG
}
const fin = () => console.log('terminé')
setTimeout(() => { mostrarLetras('hola', fin); }, 0)
setTimeout(() => { mostrarLetras('hola', fin); }, 250)
setTimeout(() => { mostrarLetras('hola', fin); }, 500)
