const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

//...
// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha 
app.use(express.static('./public'))
// Esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

const logueoEntrada=[]
io.on('connection', (socket) => {
    // paso 2 conexion socket
    console.log("cliente conectado")

    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    // Se imprimirá solo la primera vez que se ha abierto la conexión   
    // paso 4 conexion socket
    socket.on('notificacion', (hora)=>{
        logueoEntrada.push( socket.id+" entro: "+hora)
        // paso 5 conexion a todos los socket
        io.sockets.emit('mensaje', logueoEntrada)
        
        // si quieren solamente comunicarse con la ventana/front 
        // que mando ese evento puede mandarlo asi =>
        // socket.emit('mensaje', logueoEntrada)
    })


})
// El servidor funcionando en el puerto 3000
httpServer.listen(3000, () => console.log('SERVER ON') )