
// 1) npm init -y
// 2) npm i typescript
    npm i express
    npm i @types/express -d
// generamos tsconfig
// 3) ./node_modules/.bin/tsc --init
// 4) CAMIAR OUTDIR POR ./dist
// 5) scripts
// build:"node_modules/.bin/tsc"
// watch:"node_modules/.bin/tsc -w"
// start: "node ./dist/index.js"

// --- ejecutar nodemon con ts ? 
// 1) instalar ts-node
// npm i ts-node
// 2) crear script para ts nodemon 
// "nodemon:ts": " nodemon ./index.ts"
// 3) npm run nodemon:ts
