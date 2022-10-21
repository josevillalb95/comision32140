import * as operaciones from './utils/operaciones'
const numero1=80
const numero2=2
console.log( `SUMA: ${operaciones.sumar(numero1,numero2)} `)
console.log( `RESTA: ${operaciones.restar(numero1,numero2)} `)
console.log( `MULTIPLICACION: ${operaciones.multiplicar(numero1,numero2)} `)
console.log( `DIVISION: ${operaciones.dividir(numero1,numero2)} `)


// 1) npm init -y
// 2) npm i typescript
// generamos tsconfig
// 3) ./node_modules/.bin/tsc --init
// 4) CAMIAR OUTDIR POR ./dist
// 5) scripts
// build:"node_modules/.bin/tsc ./index.ts"
// watch:"node_modules/.bin/tsc ./index.ts -w"
// start: "node ./dist/index.js"

// --- ejecutar nodemon con ts ? 
// 1) instalar ts-node
// npm i ts-node
// 2) crear script para ts nodemon 
// "nodemon:ts": " nodemon ./index.ts"
// 3) npm run nodemon:ts

