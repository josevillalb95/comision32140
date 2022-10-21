"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const operaciones = __importStar(require("./utils/operaciones"));
const numero1 = 80;
const numero2 = 2;
console.log(`SUMA: ${operaciones.sumar(numero1, numero2)} `);
console.log(`RESTA: ${operaciones.restar(numero1, numero2)} `);
console.log(`MULTIPLICACION: ${operaciones.multiplicar(numero1, numero2)} `);
console.log(`DIVISION: ${operaciones.dividir(numero1, numero2)} `);
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
