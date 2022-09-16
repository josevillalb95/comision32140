

// FS MODO ASYNC NO BLOQUEANTE 
// EJEMPLO LEER UN ARCHIVO
// const contenido = fs.readFile('4-fechaYHora.js', 'utf-8', (e,data)=>{ codigo ... })

// EJEMPLO ESCRIBIR EN EL ARCHIVO 
// fs.writeFile('fyh.txt', new Date().toLocaleString(), (e)=>{ codigo ... })


// DESAFIO GENERICO 


const fs = require('fs')
// ejecutar en la terminal:
// npm init -y
// antes de correr el archivo!
fs.readFile('./package.json', 'utf-8', (error, contenido) => {
    if (error) {
        throw new Error(`Error en lectura: ${error}`)
    }

    console.log('package.json: lectura exitosa')


    // const jsonExample= {
    //     nombre:'jose',
    //     apellido:'villaba'
    // }
    // console.log(JSON.stringify(jsonExample))
    // console.log(JSON.parse('{"nombre":"jose","apellido":"villaba"}'))
    const info = {
        contenidoStr: contenido,
        contenidoObj: JSON.parse(contenido),
        size: contenido.length
    }
    console.log({info})
    fs.writeFile('./info.txt', JSON.stringify(info), error => {
        if (error) {
            throw new Error(`Error en escritura: ${error}`)
        }
        console.log('info.txt: escritura exitosa')
    })
})