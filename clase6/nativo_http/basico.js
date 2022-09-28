// libreria nativa para crear servidiores HTTP
const http = require('http')
//creo server con la herramienta 
const server = http.createServer((peticion, respuesta) => {
    // peticion brinda datos de nuestra peticion // header, body, method, url
    // respuesta sirve para responder al cliente 
   respuesta.end('Hola mundo')
})
const port=process.env.PORT||8200
// creo conexion diciendole al servidor que escuche en el puerto 8080 en este caso
// brinda un callback que indica que esta listo
const connectedServer  = server.listen(port, () => {
   console.log(`Servidor Http escuchando en el puerto  ${connectedServer .address().port}`)
})
