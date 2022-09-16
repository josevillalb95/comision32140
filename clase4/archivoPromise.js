// FS MODO ASYNC NO BLOQUEANTE 
// EJEMPLO LEER UN ARCHIVO PROMESAS
// const fs = require('fs')
// const contenido = fs.promises.readFile('4-fechaYHora.js', 'utf-8')
// .then( contenido => console.log(contenido) )
// .catch(e => console.log(e) )

// EJEMPLO LEER UN ARCHIVO AWAIT
// const fs = require('fs')
// async function leerConAwait(){
//     try{
//         const contenido = await fs.promises.readFile('4-fechaYHora.js', 'utf-8')
//         console.log(contenido)
//     }
//     catch(e){
//         // codigo...
//     }
// }
// observaciones con el tema AWAIT ! 
// ➢ En el caso de querer hacer algo con la variable fuera del bloque try/catch no se va a poder por el scope
// ➢ la palabra reservada “await” hace que el llamado se comporte de manera bloqueante.
// ➢ Recordar también que la palabra “await” puede usarse ÚNICAMENTE dentro
// de una función de tipo “async” 














// DESAFIO GENERICO 
const fs = require('fs')
fs.promises.readFile('info.txt', 'utf-8')
  .then(contenido => {
    console.log('info.json: lectura exitosa')
    const info = JSON.parse(contenido)
    console.log(info)
    const packageJsonObj = info.contenidoObj
    packageJsonObj.author = 'Coderhouse'
    fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonObj, null, 2))
      .then(() => console.log('package.json.coder: escritura exitosa'))
      .catch(error => {
        console.log(`Error en escritura: ${error}`)
      })
  })
  .catch(error => console.log(`Error en lectura: ${error}`))

