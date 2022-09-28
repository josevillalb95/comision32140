// libreria natiiva para crear servidiores HTTP
const http = require('http')
//creo server con la herramienta 
const serverConRouter= http.createServer( (peticion, respuesta) => {
    // peticion brinda datos de nuestra peticion // header, body, method, url
    // respuesta sirve para responder al cliente 
    console.log({peticion})
    // obtengo url 
    const {url} = peticion;
    let msj=''
    switch (url) {
        // ruta con el nombre '/hola'
        case '/hola':
            msj='Hola comision 32140 :) '
            break;

        // ruta con el nombre '/chau'
        case '/chau':
            msj='Chau comision 32140 :) '
            break;
    
        // ruta con el otro nombre
        default:
            msj='Otra ruta'
            break;
    }
    // escribo el mensaje
    respuesta.write(msj); 
    // retorno el msj 
    respuesta.end(); 
})

// creo conexion diciendole al servidor que escuche en el puerto 8080 en este caso
// brinda un callback que indica que esta listo
const connectedServer  = serverConRouter.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto  ${connectedServer .address().port}`)
})
