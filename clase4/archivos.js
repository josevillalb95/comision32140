// LOS ARCHIVOS SE UTILIZAN PARA LA necesidad de que algunos datos persistan más allá de la
// ejecución del programa. OSEA QUE SI EL PROGRAMA SE CIERRA Y SE VUELVEN A ABRIR ESA INFROMACION
// NO SE PIERDA 
// VENTAJAS 
//     ● FACIL DE USAR SIN CONFIGACIONES TEDIOSAS COMO UNA BASE DE DATOS
//     ● SE PUEDEN EDITAR MANUAL FACILMENTE 
//     ● FACILES DE COMPARTIR 
// DESVENTAJAS 
//     ● PARA LEER TENES QUE TAER TODO EL DOCUMENTO 
//     ● PARA MODIFCAR UN DATO, TENES QUE MODIFICAR TODO EL DOCUMENTO
//     ● UNA BASE DATOS ES MEJOR OPCION

// Sus operaciones
//         ● readFileSync
//         ● writeFileSync
//         ● appendFileSync
//         ● unlinkSync
//         ● mkdirSync
// se puede sacar el "sync" para que no sea bloqueante pero lo tenemos que manejar con callback

// EJEMPLO LEER UN ARCHIVO
// const contenido = fs.readFileSync('4-fechaYHora.js', 'utf-8')

// EJEMPLO ESCRIBIR EN EL ARCHIVO 
// fs.writeFileSync('fyh.txt', new Date().toLocaleString())


const fs = require('fs')
// con la extension de vs "CODE RUNNER" la ruta relativa cambia ( esta parte combiene ejecutarla con nodejs ' node index.js por ejemplo' )
try {
    fs.writeFileSync('./fyh.txt', new Date().toLocaleString())
} catch (error) {
    throw new Error(`Error en escritura: ${error.message}`)
}
try {
    // agregar
    fs.appendFileSync('./fyh.txt', 'agrego texto ')
 } catch (error) {
     throw new Error(`Error en apendear: ${error.message}`)
 }
try {
    const contenido = fs.readFileSync('./fyh.txt', 'utf-8')
    console.log(contenido)
} catch (error) {
    throw new Error(`Error en lectura: ${error.message}`)
}

setTimeout( ()=>{
    console.log("ELIMINANDO ARCHIVO ")
    try {
        fs.unlinkSync('./fyh.txt')
    } catch (error) {
        throw new Error(`Error al Eliminar: ${error.message}`)
    }
},3500)


// EJEMPLO DE DIRECTORIOS
// MI DIRECTORIO ES /Users/u6222108/Desktop/proyectos/coderhouse/comision32140/clase4
// ./archivo.txt => lo busco en clase4
// ../archivo.txt => lo busco en comision32140
// ../../archivo.txt => lo busco en coderhouse
//  ../clase3 => lo busco en la clase3


// archivoMigracion.csv
// lautaro,tallarico
// jose maria,villalba
// alan,sinicco
// EJEMPLO PROFECIONAL 
// try {
//     const contenido = fs.readFileSync('./archivoMigracion.csv', 'utf-8')
//     const arrayContendio= contenido.split('/n')
//     // const valor="jose,profe,coder"
//     // console.log(valor.split(','))
//     // resultado: [ 'jose', 'profe', 'coder' ]
//     // ---
//     // ejemplo respuesta arrayContendio= ["lautaro,tallarico","jose,villalba","alan,sinicco"]
//     arrayContendio.forEach(item=>{
//         const items=item.split(',')
//         // ejemplo respuesta items= ['lautaro','tallarico']
//         const nombre=items[0]
//         const apellido=items[1]
//         // baseDatosUser nuestra base de datos de usuarios 
//         baseDatosUser.save(nombre,apellido)
//     })
// } catch (error) {
//     throw new Error(`Error en lectura: ${error.message}`)
// }





// APPEND AGREGAR TEXTO AL ARCHIVO 
// DE ESTA MANERA 
//     fs.appendFileSync('./fyh.txt', 'agrego texto ')
// SERIA LO MISMO 
//     let contenido = fs.readFileSync('./fyh.txt', 'utf-8')
//     contenido+="hola mundo "
//     fs.writeFileSync('./fyh.txt',contenido)
