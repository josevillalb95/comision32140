import { bgWhite, green, red, yellow} from "https://deno.land/std@0.178.0/fmt/colors.ts";
const numeros= Deno.args.map(num => Number(num) ).sort((a,b)=>a-b )
const minimo=numeros[0]
const maximo=numeros[numeros.length -1 ]
let promedio = 0
numeros.forEach(num => {
    promedio+=num
});
promedio = promedio/numeros.length
const texto = `
************************************
Números: ${numeros}
Mínimo: ${minimo}
Máximo: ${maximo}
Promedio: ${promedio}
************************************
`
const log = `
************************************
Números: ${numeros}
${ bgWhite(yellow("Mínimo: "+minimo.toString())) }
${bgWhite(red("Máximo: "+maximo.toString())) }
${bgWhite(green("Promedio: "+promedio.toString())) }
************************************
`
await Deno.writeTextFile('resultados.dat',texto)
console.log(log)