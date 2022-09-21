const consigna=`
A) Los nombres de los productos en un string separados por comas.
B) El precio total
C) El precio promedio
D) El producto con menor precio
E) El producto con mayor precio
F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola
`
console.log(consigna)
let productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const getNombres = () => productos.map(producto => producto.nombre).join(', ')
// map -> me retorna = ['Escuadra','Calculadora',...'Reloj',....]
// join -> me retorna 'Escuadra, Calculadora, ...., Reloj, ..
// OTRA FORMA 
// const getNombres = () =>{
//     let nombre=''
//     productos.forEach(item=> nombre+=(item.nombre+', '))
//     return nombre
// }
const getPrecioTotal = () => {
    let total = 0
    productos.forEach(producto => {
        total += producto.precio
    })
    return total
}
const getPrecioPromedio = () => getPrecioTotal() / productos.length
const getProdPrecioMinimo = () => {
    let min = productos[0].precio
    let nombre_producto = productos[0].nombre
    for(let producto of productos) {
        if(producto.precio < min) {
            min = producto.precio
            nombre_producto = producto.nombre
        }
    }
    return nombre_producto
}

const getProdPrecioMaximo = () => {
    let max = productos[0].precio
    let nombre_producto = productos[0].nombre
    for(let producto of productos) {
        if(producto.precio > max) {
            max = producto.precio
            nombre_producto = producto.nombre
        }
    }
    return nombre_producto
}

function to2decimales(valor) {
    return Number(valor.toFixed(3))
}

let info = {
    nombres : getNombres(),
    total: to2decimales(getPrecioTotal()),
    promedio: to2decimales(getPrecioPromedio()),
    'Producto precio mínimo': getProdPrecioMinimo(),
    'Producto precio máximo': getProdPrecioMaximo(),
}

console.log(info)
