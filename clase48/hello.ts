import {parse, font} from "./deps";
const nacimientoProfe= parse('04-07-1995','dd-mm-yyyy')
const hello=(msj) => `Hola, ${msj}`
console.log(hello("comision 32140"))
console.log(font.bgBlue(font.green(font.bold("el profe nacio el: "+nacimientoProfe))))