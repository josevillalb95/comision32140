const consigna=`
    A- Crear un proyecto en node.js que genere 10000 números aleatorios en el rango de 1 a 20.
    B- Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la 
        cantidad de veces que salió dicho número. Representar por consola los resultados.
 `
console.log(consigna)
let objetoDeNumeros = {}
const getAleatorio = () => parseInt(Math.random()*20) + 1
for(let i=0; i<10000; i++) {
    const numero = getAleatorio()
    if(!objetoDeNumeros[numero]) 
        objetoDeNumeros[numero] = 0
        // creo el objetoDeNumeros[2]=0 
    // siempre existe objetoDeNumeros[2] porque se crea previamente 
    objetoDeNumeros[numero]++
}
console.log(numeros)
